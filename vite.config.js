import path from 'path';
import {defineConfig} from 'vite';
import stylelintPlugin from '@frsource/vite-plugin-stylelint';
import eslintPlugin from 'vite-plugin-eslint';

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
  plugins: [stylelintPlugin(), eslintPlugin()],
  build: {
    rollupOptions: {},
  },
});
