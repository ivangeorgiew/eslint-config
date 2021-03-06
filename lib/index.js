const { enabledRules, disabledRules } = require("./utils/constants")

module.exports = {
    extends: [
        "plugin:import/recommended",
        "plugin:regexp/recommended",
        "plugin:promise/recommended",
        "plugin:compat/recommended",
        "plugin:ecmalist/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    globals: {
        window: "readonly",
        global: "readonly",
        self: "readonly",
    },
    settings: { es: { aggressive: true } },
    plugins: ["destructuring"],
    rules: {
        ...enabledRules,
        ...disabledRules,
        "ecmalist/no-modules": ["off"],
        "ecmalist/no-default-parameters": ["error"],
        "destructuring/in-params": ["error", { "max-params": 0 }],
        "destructuring/no-rename": ["error"],
        "destructuring/in-methods-params": ["error"],
    },
}
