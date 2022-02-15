import {defineConfig} from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from '@frsource/vite-plugin-stylelint';

export default defineConfig({
  publicDir: 'static',
  plugins: [stylelintPlugin(), eslintPlugin()],
});
