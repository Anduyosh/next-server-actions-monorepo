module.exports = {
    root: true,
    extends: [
        'plugin:import/errors',
        'prettier',
        '@next-server-actions-monorepo/eslint-config/base.js'
    ],
    settings: {
        'import/resolver': {
            typescript: {
                // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
                project: [require('path').resolve(__dirname, 'tsconfig.json')]
            },
            alias: {
                extensions: ['.js', '.ts'],
                map: [['~', '.']]
            }
        }
    },
    rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/export': 'warn',
        'import/no-cycle': 'off'
    }
};
