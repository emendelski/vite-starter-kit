module.exports = {
  customSyntax: 'postcss-scss',
  ignoreFiles: ['./dist/**/*', './node_modules/**/*'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'selector-max-id': 0,
    'selector-list-comma-newline-after': 'always',
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-property-value-disallowed-list': {
      '/^border/': ['none'],
    },
    'max-nesting-depth': [
      3,
      {
        ignore: ['blockless-at-rules'],
        ignoreAtRules: ['include', 'media'],
      },
    ],
    'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
    'scss/at-extend-no-missing-placeholder': true,
    'order/order': [
      'declarations',
      {
        type: 'at-rule',
      },
      {
        type: 'at-rule',
        hasBlock: true,
      },
      'rules',
    ],
    'number-leading-zero': null,
    'string-quotes': null,
    'rule-empty-line-before': null,
    'at-rule-empty-line-before': null,
    indentation: null,
  },
};
