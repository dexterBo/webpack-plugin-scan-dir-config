module.exports = {
  root: true,

  extends: ['airbnb'],

  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },

  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      modules: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },

  rules: {
    // node环境下 允许导入动态的require
    'global-require': 0,
    'no-console': [1, { allow: ["warn", "error", "info"] }],
    'import/no-dynamic-require': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': ["error", { "allowShortCircuit": true }],
    'class-methods-use-this': 0
  }
};
