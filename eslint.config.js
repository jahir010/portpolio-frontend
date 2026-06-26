import react from 'eslint-plugin-react';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    rules: {
      react: 'off',
      '@next/next/no-img-element': 'off',
    },
  },
];
