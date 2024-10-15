module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 72],
    'footer-max-line-length': [2, 'always', 72],
    'header-max-length': [2, 'always', 50],
    'subject-empty': [2, 'always'],
    'type-empty': [2, 'always'],
  },
};
