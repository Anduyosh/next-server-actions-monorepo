module.exports = {
    root: true,
    extends: [
        'plugin:import/errors',
        'prettier',
        'next/core-web-vitals',
        '@next-server-actions-monorepo/eslint-config/next.js'
    ],
    settings: {
        'import/resolver': {
            typescript: {
                // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
                project: [require('path').resolve(__dirname, 'tsconfig.json')]
            },
            alias: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                map: [['~', '.']]
            }
        }
    }
};
