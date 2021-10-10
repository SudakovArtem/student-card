export function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === '';
        break;
      case 'isCyrillic': {
        const cyrillicRegExp = /[^а-яёА-ЯЁ\s]/g;
        statusValidate = cyrillicRegExp.test(data);
        break;
      }
      case 'isLink': {
        const linkRegExp = /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.)([0-9A-Za-z-.@:%_+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/;
        statusValidate = !linkRegExp.test(data);
        break;
      }
      case 'isYear': {
        const yearRegExp = /\d{4}/;
        statusValidate = +data >= config.value || !yearRegExp.test(data);
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]);
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
