/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    // alphabetic order
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,

    // formatting
    'declaration-colon-newline-after': 'always-multi-line',
    'rule-empty-line-before': [
      'always',
      { except: ['first-nested', 'after-single-line-comment'] },
    ],
    'at-rule-empty-line-before': [
      'always',
      { except: ['first-nested', 'blockless-after-same-name-blockless'] },
    ],
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,

    // mobile first
    'media-feature-name-disallowed-list': [
      'max-width',
      {
        message: 'Use min-width for a mobile-first approach',
      },
    ],

    // works with a systemic design - disable if impractical in a specific project
    'color-named': 'always-where-possible',
  },
};

module.exports = config;
