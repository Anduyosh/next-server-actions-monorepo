/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */

const base = require('./base');

/**
 * React ESLint configuration.
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        /**
         * This value should default to "React" but it doesn't
         * @see https://github.com/typescript-eslint/typescript-eslint/pull/2498
         */
        jsxPragma: 'React',
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        'airbnb',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'airbnb/hooks',
        'plugin:prettier/recommended'
    ],
    rules: {
        ...base.rules,
        /**
         * Prevent invalid character from appearing in markup.
         * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
         * @description Allow to write unescaped characters (like > or ").
         */
        'react/no-unescaped-entities': 'off',
        /**
         * Prevent missing props validation in a React component definition.
         * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
         * @description Didabled because prop validation is already handled by TypeScript.
         */
        'react/prop-types': 'off',
        /**
         * Prevent missing displayName in a React component definition.
         * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
         * @description Disabled decause it's only needed for React debugging messages.
         */
        'react/display-name': 'off',
        /**
         * Checks rules of hooks.
         * @see https://reactjs.org/docs/hooks-rules.html#eslint-plugin
         * @description Display an error when violating the rules of hooks.
         */
        'react-hooks/rules-of-hooks': 'error',
        /**
         * Checks effect dependencies
         * @see https://reactjs.org/docs/hooks-rules.html#eslint-plugin
         * @description Display a warning when the dependency array is invalid.
         */
        'react-hooks/exhaustive-deps': 'warn',
        /**
         * Prevent usage of string literals on JSX.
         * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
         * @description Enforce string literals as children (except for &nbsp;), props and attributes.
         */
        'react/jsx-no-literals': [
            'error',
            {
                noStrings: false,
                allowedStrings: ['&nbsp;', '&copy;'],
                ignoreProps: false,
                noAttributeStrings: false
            }
        ],
        /**
         * Enforce or disallow curly braces on JSX props and/or children.
         * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
         * @description Disallow curly braces on props and enforces them on prop elements and children.
         */
        'react/jsx-curly-brace-presence': [
            'error',
            { props: 'never', children: 'always', propElementValues: 'always' }
        ],
        /**
         * Enforce a defaultProps definition for every optional prop.
         * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
         * @description Require defaultProps except for functional components.
         */
        'react/require-default-props': ['warn', { functions: 'ignore' }],
        /**
         * Restrict file extensions that may contain JSX.
         * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
         * @description Allow react typescript extension (.tsx) to contain JSX.
         */
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        /**
         * Disallow JSX props spreading.
         * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
         * @description Allow custom components to have JSX props spreading.
         */
        'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
        /**
         * Enforce a specific function type for function components.
         * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
         * @description Allow only arrow functions for named components.
         */
        'react/function-component-definition': [
            'error',
            { namedComponents: 'arrow-function' }
        ]
    },
    overrides: [...base.overrides],
    settings: {
        ...base.settings,
        react: {
            version: 'detect'
        }
    }
};
