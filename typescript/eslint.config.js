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
