/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */

const react = require('./react');

/**
 * NextJS ESLint configuration.
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    ...react,
    extends: [...react.extends, 'next'],
    rules: {
        ...react.rules,
        /**
         * Ensure the usage of NextJS's Link component to navigate to a page route.
         * @see https://nextjs.org/docs/messages/no-html-link-for-pages
         * @description Display a warning when using <a> instead of <Link> to navigate to a page route.
         */
        '@next/next/no-html-link-for-pages': 'warn'
    }
};
