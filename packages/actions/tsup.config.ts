import { defineConfig, type Options } from 'tsup';

export default defineConfig((options) => [
    {
        entry: ['src/index.ts'],
        format: ['esm', 'cjs'],
        platform: 'node',
        dts: true,
        minify: !options.watch,
        clean: true,
        keepNames: true,
        esbuildOptions: (opts) => {
            /** Append 'use server' directive to bundled file */
            opts.banner = {
                js: '"use server";'
            };
        }
    } as Options
]);
