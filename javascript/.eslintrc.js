const globals = require('./global');
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb-base', 'eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    ...globals
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    semi: 0,
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'no-debugger': 'warn',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'ignore'
      }
    ]
  }
};
