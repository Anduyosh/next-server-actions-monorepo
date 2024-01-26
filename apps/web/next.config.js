module.exports = async () => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        poweredByHeader: false,
        transpilePackages: ['@next-server-actions-monorepo/actions']
    };

    return nextConfig;
};
