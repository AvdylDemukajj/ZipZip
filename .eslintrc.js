module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react-native/all'],
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
