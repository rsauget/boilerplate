import antfu from '@antfu/eslint-config';

import relativeTsExtensions from './eslint-rules/relative-ts-extensions.js';

export default antfu(
  {
    type: 'lib',
    stylistic: {
      quotes: 'single',
      semi: true,
    },
    typescript: {
      erasableOnly: true,
      tsconfigPath: './tsconfig.json',
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
