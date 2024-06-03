module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'revert',
        'build',
        'chore',
      ],
    ],
    'body-empty': [2, 'never'],
    'body-min-length': [2, 'always', 3],
    'body-case': [2, 'always', 'lower-case'],
    'footer-empty': [2, 'always'],
  },
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
