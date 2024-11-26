import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import optimizeRegex from 'eslint-plugin-optimize-regex';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default [
  {
    root: true,
    ignores: ['node_modules/**/*', 'build/**/*', '**/generated-types.tsx'],

  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mjs'],
  },
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      import: _import,
      'jsx-a11y': jsxA11Y,
      react: react,
      'react-hooks': reactHooks,
      'optimize-regex': optimizeRegex,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: path.resolve(dirname, './tsconfig.json'),
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
      'max-len': ['error', { code: 120, ignoreTrailingComments: true, ignoreUrls: true }],
      'react/jsx-props-no-spreading': [
        'error',
        { html: 'ignore', custom: 'ignore', exceptions: [''] },
      ],
      'comma-dangle': ['error', { arrays: 'always-multiline', objects: 'always-multiline', imports: 'always-multiline', exports: 'always-multiline', functions: 'always-multiline' }],
      'prefer-destructuring': ['error', { object: true, array: false }],
      'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'no-unused-vars': 'off',
      'no-unused-expressions': 'off',
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];
