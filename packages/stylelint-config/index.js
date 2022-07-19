module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-css-modules",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": true,
    "at-rule-no-unknown": null,
    "declaration-colon-newline-after": "always-multi-line",
    "rule-empty-line-before": [
      "always",
      { except: ["first-nested", "after-single-line-comment"] },
    ],
    "at-rule-empty-line-before": [
      "always",
      { except: ["first-nested", "blockless-after-same-name-blockless"] },
    ],
    "declaration-empty-line-before": "never",
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
    "selector-id-pattern": "^[a-z][a-zA-Z0-9]+$",
    "keyframes-name-pattern": "^[a-z][a-zA-Z0-9]+$",
    "scss/dollar-variable-empty-line-after": [
      "always",
      { except: ["before-dollar-variable"] },
    ],
    "scss/at-rule-no-unknown": true,
    "scss/at-mixin-pattern": "^[a-z][a-zA-Z0-9]+$",
    "scss/dollar-variable-pattern": "^[a-z][a-zA-Z0-9]+$",
    "scss/double-slash-comment-empty-line-before": null,
    "declaration-no-important": true,
  },
};
