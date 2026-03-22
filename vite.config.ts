import path from 'node:path'

import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'
import { defineConfig } from 'weapp-vite/config'

export default defineConfig({
    plugins: [
        UnifiedViteWeappTailwindcssPlugin({
            cssEntries: [path.resolve(import.meta.dirname, './src/app.css')],
            rem2rpx: true,
        }),
    ],
    weapp: {
        autoImportComponents: {
            globs: ['components/**/*.vue', 'components/**/*.wxml'],
            typedComponents: true,
            vueComponents: true,
            vueComponentsModule: 'wevu',
        },
        autoRoutes: true,
        srcRoot: 'src',
    },
})
