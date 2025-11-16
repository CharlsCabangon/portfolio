import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import testingLibrary from 'eslint-plugin-testing-library';
import vitest from 'eslint-plugin-vitest';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    'node_modules',
    'dist',
    'build',
    'coverage',
    '.eslintcache',
    '.vscode',
    '.idea',
    '.DS_Store',
    'vite.config.js',
  ]),

  js.configs.recommended,

  {
    files: ['src/**/*.{js,jsx}', '*.config.js', 'vite.config.js'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      prettier,
      'testing-library': testingLibrary,
      vitest,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...vitest.environments.env.globals,
      },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.json'],
        },
      },
    },
    rules: {
      // General JS/React best practices
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off', // React 17+ no longer needs import React
      'react/prop-types': 'off',

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Prettier formatting
      'prettier/prettier': 'error',

      // Import rules
      'import/no-unresolved': 'error',
      'import/named': 'error',

      // React Refresh
      'react-refresh/only-export-components': 'warn',

      // Testing Library
      'testing-library/no-node-access': 'off',
      'testing-library/no-container': 'off',
    },
  },
]);
