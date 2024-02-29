// module.exports = { extends: ['@commitlint/config-conventional'] }
const Configuration = {
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'header-trim': [2, 'always'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        // 'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-enum': [
            2,
            'always',
            [
                ":sparkles: feat:",
                ":wrench: fix:",
                ":rocket: deploy:",
                ":truck: move:",
                ":office: build:",
                ":fire: fix:",
                ":books: docs:",
                ":dizzy: style:",
                ":recycle: refactor:",
                ":zap: perf:",
                ":leftwards_arrow_with_hook: revert:"
            ],
        ],
    },

    ignores: [(commit) => commit === ''],
    /*
     * Whether commitlint uses the default ignore rules, see the description above.
     */
    defaultIgnores: true,
};
module.exports = Configuration;