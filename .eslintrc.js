module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  plugins: [
    'jest',
    'babel',
  ],
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'import/extensions': 0, // FIXME: remove when rule will be adjusted for new nodejs version
  },
};
