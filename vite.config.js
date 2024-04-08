import path from 'path';

import {defineConfig} from 'vite';
import eslintPlugin from 'vite-plugin-eslint2';
import stylelintPlugin from 'vite-plugin-stylelint';

export default defineConfig({
  publicDir: 'static',
  plugins: [stylelintPlugin(), eslintPlugin()],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, 'node_modules'),
      },
    ],
  },
});
