/**
 * Base ESLint configuration.
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    rules: {
        /**
         * Disallow reassignment of function parameters.
         * @see https://eslint.org/docs/rules/no-param-reassign
         * @description Disallow reassignment for parameters, but allow it for its properties.
         */
        'no-param-reassign': ['error', { props: false }],
        /**
         * Ensure consistent use of file extension within the import path.
         * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
         * @description Disabled because we are not concerned about a consistent usage of file extension.
         */
        'import/extensions': 'off',
        /**
         * Prefer using default export over named export when there is only a single export from a module.
         * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
         * @description Disabled because we want single named exports.
         */
        'import/prefer-default-export': 'off',
        /**
         * Forbid the use of extraneous packages (external modules not declared in the package.json file).
         * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
         * @description Displays an error if devDependencies are imported from non test files.
         */
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['tsup.config.ts']
            }
        ]
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
                paths: ['src']
            },
            typescript: {}
        }
    }
};
