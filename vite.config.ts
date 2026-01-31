import path from "node:path";
import { UnifiedViteWeappTailwindcssPlugin } from "weapp-tailwindcss/vite";
import { defineConfig } from "weapp-vite/config";

export default defineConfig(() => ({
  weapp: {
    srcRoot: "src",
  },
  plugins: [
    UnifiedViteWeappTailwindcssPlugin({
      rem2rpx: true,
      cssEntries: [path.resolve(import.meta.dirname, "./src/app.css")],
    }),
  ],
}));
