import antfu from '@antfu/eslint-config';

import relativeTsExtensions from './eslint-rules/relative-ts-extensions.js';

export default antfu(
  {
    type: 'lib',
    e18e: {
      moduleReplacements: true,
    },
    stylistic: {
      quotes: 'single',
      semi: true,
    },
    typescript: {
      erasableOnly: true,
      overrides: {
        'ts/naming-convention': [
          'error',
          { selector: 'default', format: ['camelCase'], leadingUnderscore: 'allow' },
          { selector: 'variable', format: ['camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
          { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
          { selector: 'memberLike', modifiers: ['private'], format: ['camelCase'], leadingUnderscore: 'require' },
          { selector: 'typeLike', format: ['PascalCase'] },
          { selector: 'enumMember', format: ['UPPER_CASE'] },
          { selector: 'import', format: ['camelCase', 'PascalCase'] },
        ],
      },
      overridesTypeAware: {
        'ts/no-misused-spread': 'error',
        'ts/no-unnecessary-condition': 'error',
        'ts/prefer-nullish-coalescing': 'error',
        'ts/prefer-optional-chain': 'error',
      },
      tsconfigPath: './tsconfig.json',
    },
    unicorn: {
      allRecommended: true,
    },
  },
  {
    files: ['**/*.ts'],
    plugins: { local: relativeTsExtensions },
    rules: {
      'local/relative-ts-extensions': 'error',
    },
  },
);
