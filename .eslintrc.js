module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': ['error', 'never'],
    'object-curly-spacing': [2, 'never'],
    'multiline-ternary': ['error', 'never']
  }
};