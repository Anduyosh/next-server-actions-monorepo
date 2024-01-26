/**
 * This configuration only applies to the package manager root.
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    root: true,
    extends: ['@next-server-actions-monorepo/eslint-config/base.js']
};
