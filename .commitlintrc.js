const commitlint = require('@yuntijs/lint').commitlint

module.exports = {
  ...commitlint,
  rules: {
    ...commitlint.rules,
    'footer-max-line-length': [0],
  }
};
