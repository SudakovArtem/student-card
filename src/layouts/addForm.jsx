import React, {useEffect, useState} from 'react';
import TextField from '../components/textField';
import Modal from '../components/modal';
import {validator} from '../utils/validator';
import {useHistory} from 'react-router-dom';

const AddForm = () => {
  const history = useHistory();
  const [data, setData] = useState(JSON.parse(localStorage.getItem('student')) || {
    name: '',
    surname: '',
    year: '',
    portfolio: ''
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const validatorConfig = {
    name: {
      isRequired: {
        message: 'Поле "Имя" обязательно для заполнения'
      },
      isCyrillic: {
        message: 'Поле "Имя" должно быть на русском языке'
      }
    },
    surname: {
      isRequired: {
        message: 'Поле "Фамилия" обязательно для заполнения'
      },
      isCyrillic: {
        message: 'Поле "Фамилия" должно быть на русском языке'
      }
    },
    year: {
      isRequired: {
        message: 'Поле "Год рождения" обязательно для заполнения'
      },
      isYear: {
        message: 'Поле "Год рождения" некорректно',
        value: new Date().getFullYear()
      }
    },
    portfolio: {
      isRequired: {
        message: 'Поле "Портфолио" обязательно для заполнения'
      },
      isLink: {
        message: 'Поле "Портфолио" должно быть ссылкой'
      }
    }
  };
  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = ({target}) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const disableBtn = Object.keys(errors).length === 0 && localStorage.getItem('student') !== JSON.stringify(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    const isValid = validate();
    if (!isValid) return;
    localStorage.setItem('student', JSON.stringify(data));
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    history.push('/');
  };

  const handleCloseBtnClick = (e) => {
    e.preventDefault();
    closeModal();
  };

  const handleOverlayClick = ({target}) => {
    if (!target.closest('.modal-dialog')) {
      closeModal();
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-4">
            <h1 className="mb-4">Редактировать</h1>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
              />
              <TextField
                label="Фамилия"
                name="surname"
                value={data.surname}
                onChange={handleChange}
                error={errors.surname}
              />
              <TextField
                label="Год рождения"
                name="year"
                type="number"
                value={data.year}
                onChange={handleChange}
                error={errors.year}
              />
              <TextField
                label="Портфолио"
                name="portfolio"
                value={data.portfolio}
                onChange={handleChange}
                error={errors.portfolio}
              />
              <button className="btn btn-secondary" type="button" onClick={() => history.push('/')}>Назад</button>
              <button className="btn btn-primary mx-4" type="submit" disabled={!disableBtn}>Обновить</button>
            </form>
          </div>
        </div>
      </div>
      <Modal onCloseBtnClick={handleCloseBtnClick} onOverlayClick={handleOverlayClick} visible={modalVisible} text="Обновлено!"/>
    </>
  );
};

export default AddForm;
