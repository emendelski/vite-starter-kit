import {defineConfig} from 'vite';
import path from 'path';
// import viteStylelint from '@amatlash/vite-plugin-stylelint';
import stylelintPlugin from '@frsource/vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'static',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  plugins: [stylelintPlugin()],
  build: {
    rollupOptions: {},
  },
});
