module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb-base", "plugin:@typescript-eslint/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-console": "off",
        "@typescript-eslint/indent": ["error", 2],
    },
    overrides: [
        {
            // Disable some rules that we ruthlessly abuse in unit tests.
            files: ['**/*.js', '**/*.jsx'],
            rules: {
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/no-object-literal-type-assertion': 'off',
            },
        },
    ],
};