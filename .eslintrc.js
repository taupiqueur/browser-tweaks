const baseRules = require("eslint-config-lydell");

module.exports = {
  root: true,
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
    node: true,
  },
  rules: Object.assign({}, baseRules(), {
    "no-implicit-globals": "off",
    "prettier/prettier": "error",
    strict: "off",
  }),
  overrides: [
    {
      files: ["src/**/*.js"],
      env: {
        es6: true,
        node: false,
      },
      globals: Object.assign({}, baseRules.browserEnv(), {
        chrome: false,
      }),
    },
  ],
};
