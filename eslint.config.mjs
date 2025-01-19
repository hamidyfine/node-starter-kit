/* eslint-disable import/no-named-as-default-member */

// Migrate built-in rules to @stylistic/js namespace
/* eslint @stylistic/migrate/migrate-js: "error" */

// Migrate `@typescript-eslint` rules to @stylistic/ts namespace
/* eslint @stylistic/migrate/migrate-ts: "error" */

import pluginJs from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import stylisticPluginMigrate from '@stylistic/eslint-plugin-migrate';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import importNewlines from 'eslint-plugin-import-newlines';
import jest from 'eslint-plugin-jest';
import jsdoc from 'eslint-plugin-jsdoc';
import json from 'eslint-plugin-json';
import noSecret from 'eslint-plugin-no-secrets';
import perfectionist from 'eslint-plugin-perfectionist';
import preferArrowFunction from 'eslint-plugin-prefer-arrow-functions';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import tsdoc from 'eslint-plugin-tsdoc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.node,
            },
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: 'latest',
            },
            sourceType: 'module',
        },
        plugins: {
            '@stylistic': stylisticPlugin,
            '@stylistic/migrate': stylisticPluginMigrate,
            'import-newlines': importNewlines,
            'jsdoc': jsdoc,
            'no-secrets': noSecret,
            'perfectionist': perfectionist,
            'prefer-arrow-functions': preferArrowFunction,
            'simple-import-sort': simpleImportSort,
            'sonarjs': sonarjs,
            'tsdoc': tsdoc,
            'typescript-eslint': tseslint.plugin,
        },
        rules: {
            ...perfectionist.configs['recommended-alphabetical'].rules,
            '@stylistic/arrow-parens': 'off',
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/key-spacing': ['error'],
            '@stylistic/linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
            '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
            '@stylistic/max-len': ['error', { code: 256 }],
            '@stylistic/member-delimiter-style': 'error',
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/no-multiple-empty-lines': 'off',
            '@stylistic/no-trailing-spaces': ['error', { ignoreComments: true, skipBlankLines: true }],
            '@stylistic/padded-blocks': ['error', 'never'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/semi': 'error',
            '@stylistic/semi-spacing': 'error',
            '@stylistic/space-in-parens': 'off',
            '@stylistic/type-generic-spacing': 'error',
            '@stylistic/type-named-tuple-spacing': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unnecessary-condition': 'off',
            '@typescript-eslint/prefer-nullish-coalescing': 'off',
            'arrow-body-style': ['off'],
            'class-methods-use-this': 'off',
            'import-newlines/enforce': ['error', { items: 30, 'max-len': 240 }],
            'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
            'import/exports-last': 'off',
            'import/extensions': 'off',
            'import/group-exports': 'off',
            'import/namespace': ['error', { allowComputed: true }],
            'import/newline-after-import': 'error',
            'import/no-default-export': 'off',
            'import/no-duplicates': 'error',
            'import/no-extraneous-dependencies': 'off',
            'import/no-named-as-default': 'off',
            'import/no-unresolved': 'off',
            'jsdoc/check-alignment': 'warn',
            'jsdoc/check-indentation': 'warn',
            'jsdoc/check-syntax': 'warn',
            'jsdoc/no-blank-blocks': 'warn',
            'jsdoc/no-types': 'error',
            'jsdoc/require-asterisk-prefix': 'warn',
            'jsdoc/require-description': 'warn',
            'jsdoc/require-hyphen-before-param-description': 'off',
            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-param': ['warn', { checkDestructuredRoots: false }],
            'jsdoc/require-returns': 'off',
            'jsdoc/require-throws': 'error',
            'jsdoc/sort-tags': 'warn',
            'jsdoc/tag-lines': ['warn', 'never', { startLines: 1 }],
            'jsx-a11y/label-has-associated-control': 'off',
            'newline-before-return': 'off',
            'no-alert': 'off',
            'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            'no-prototype-builtins': 'off',
            'no-secrets/no-secrets': 'error',
            'no-template-curly-in-string': 'error',
            'no-underscore-dangle': 'off',
            'perfectionist/sort-imports': 'off',
            'perfectionist/sort-jsx-props': 'off',
            'perfectionist/sort-union-types': ['error', { ignoreCase: true, type: 'alphabetical' }],
            'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
            'prefer-arrow-functions/prefer-arrow-functions': ['warn', { classPropertiesAllowed: true, disallowPrototype: true, returnStyle: 'unchanged' }],
            'require-jsdoc': 'off',
            'simple-import-sort/exports': 'warn',
            'simple-import-sort/imports': 'warn',
            'tsdoc/syntax': 'warn',
            'typescript-eslint/no-non-null-assertion': 'off',
            'typescript-eslint/sort-type-constituents': 'off',
        },
        settings: {
            'import/resolver': {
                node: true,
                typescript: true,
            },
        },
    },
    {
        files: ['src/entities/**/*.ts'],
        rules: {
            'perfectionist/sort-classes': 'off',
        },
    },
    {
        files: ['src/types/*.ts'],
        rules: {
            'import/exports-last': 'off',
            'import/group-exports': 'off',
        },
    },
    {
        files: ['.cz-config.cjs', 'jest.setup.ts', 'postcss.config.js'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-var-requires': 'off',
        },
    },
    {
        files: ['**/*.json'],
        ...json.configs['recommended'],
    },
    {
        files: ['test/**'],
        ...jest.configs['flat/recommended'],
        rules: {
            ...jest.configs['flat/recommended'].rules,
        },
    },
    {
        ignores: ['dist'],
    },
];
