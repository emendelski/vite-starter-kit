// eslint-disable-next-line import/no-extraneous-dependencies
const postcssPresetEnv = require('postcss-preset-env');
const postCssPurge = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    postcssPresetEnv(),
    postCssPurge({
      content: ['./**/*.html'],
    }),
  ],
};
