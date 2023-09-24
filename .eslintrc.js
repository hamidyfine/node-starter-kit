module.exports = {
    'env': {
        'es2021': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'overrides': [
        {
            'env': {
                'node': true,
            },
            'files': [
                '.eslintrc.{js,cjs}',
            ],
            'parserOptions': {
                'sourceType': 'script',
            },
        },
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
    ],
    'rules': {
        '@typescript-eslint/no-explicit-any': 'off',
        'arrow-parens': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'eol-last': ['error', 'always'],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'off',
        'import/no-unresolved': 'off',
        'indent': ['error', 4],
        'jsx-a11y/label-has-associated-control': 'off',
        'key-spacing': ['error'],
        'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-len': ['error', { code: 256 }],
        'newline-before-return': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-multiple-empty-lines': 'off',
        'no-prototype-builtins': 'off',
        'no-trailing-spaces': ['error', { ignoreComments: true, skipBlankLines: true }],
        'no-underscore-dangle': 'off',
        'padded-blocks': ['error', 'never'],
        'quotes': ['error', 'single'],
        'require-jsdoc': 'off',
        'semi': 'error',
        'space-in-parens': 'off',
    },
};
