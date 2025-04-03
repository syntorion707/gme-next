import pluginJs from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import pluginPromise from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    // Core configuration
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: { ...globals.browser, ...globals.node },
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json'
            }
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    },

    // Base rules
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,

    // Import rules
    {
        plugins: {
            import: importPlugin
        },
        rules: {
            ...importPlugin.configs.recommended.rules,
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc' }
                }
            ]
        }
    },

    // React rules
    {
        plugins: {
            react: pluginReact
        },
        rules: {
            ...pluginReact.configs.recommended.rules,
            ...pluginReact.configs['jsx-runtime'].rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off'
        }
    },

    // Promise rules
    {
        plugins: {
            promise: pluginPromise
        },
        rules: pluginPromise.configs.recommended.rules
    },

    // Next.js rules
    {
        plugins: {
            '@next/next': nextPlugin
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            '@next/next/no-img-element': 'off',
            '@next/next/no-html-link-for-pages': 'off'
        }
    },

    // Custom rule overrides
    {
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            'react-hooks/exhaustive-deps': 'off',
            'react/display-name': 'off',
            'newline-before-return': 'error',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/ban-ts-comment': 'warn',
            'react/no-unescaped-entities': 'off',
            'react/no-unknown-property': 'off'
        }
    },

    {
        settings: {
          'import/resolver': {
            typescript: {
              project: './tsconfig.json',
              alwaysTryTypes: true
            }
          }
        }
      },

    // Prettier compatibility (MUST BE LAST)
    eslintConfigPrettier,

    // Ignore patterns
    {
        ignores: [
            '.next/*',
            'node_modules/*',
            '.husky/*',
            'dist/*',
            '*.config.*', // Add this line to ignore all config files
            'eslint.config.mjs', // Explicitly ignore this file
            'postcss.config.mjs' // Explicitly ignore this file
        ]
    }
];
