module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
  },
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'react/destructuring-assignment': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: [
          'arrow-function',
          'function-expression',
          'function-declaration',
        ],
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.tsx',
        ],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 0,
    'react/jsx-max-props-per-line': ['error', {
      maximum: { single: 3, multiple: 1 },
    }],
    'react/jsx-no-useless-fragment': 0,
    'import/extensions': [
      1,
      {
        extensions: [
          '.js',
          '.ts',
        ],
      },
    ],
    'import/first': 0,
    'import/newline-after-import': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    camelcase: 0,
    'consistent-return': 0,
    'global-require': 0,
    'max-len': [
      1,
      120,
      2,
    ],
    'new-cap': [
      2,
      {
        capIsNewExceptions: [
          'Router',
        ],
      },
    ],
    'no-confusing-arrow': 0,
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
          'info',
        ],
      },
    ],
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-shadow': [
      2,
      {
        hoist: 'never',
      },
    ],
    'no-underscore-dangle': 0,
    'prefer-arrow-callback': 0,
    semi: 'error',
    strict: [
      0,
      'global',
    ],
  },
  globals: {
    React: true,
    RequestInit: true,
    Window: true,
  },
};
