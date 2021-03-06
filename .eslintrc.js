module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
  },
};
