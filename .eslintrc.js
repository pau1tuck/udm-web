module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    extends: [
        "airbnb-typescript-prettier",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "next/core-web-vitals",
        // "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        "no-console": [0],
        "import/prefer-default-export": "off",
        "max-classes-per-file": [1],
        "prefer-const": [error],
        // "class-methods-use-this": [0],
        "@typescript-eslint/no-unused-vars": [error],
        "@typescript-eslint/no-explicit-any": [error],
    },
};
