module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "airbnb/hooks", "eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/function-component-definition": 0,
    "no-unused-vars": "warn",
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
  },
};
