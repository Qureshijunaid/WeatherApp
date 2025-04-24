module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-hooks',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  env: {
    'react-native/react-native': true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/order': ['warn', {
      groups: ['builtin', 'external', 'internal'],
      pathGroups: [
        {
          pattern: 'react',
          group: 'external',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['react'],
      'newlines-between': 'always',
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};