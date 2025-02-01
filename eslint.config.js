import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    settings: {
      next: {
        rootDir: 'packages/my-app/',
      },
    },
    rules: {
        'react/no-unescaped-entities': 'off',
        '@next/next/no-page-custom-font': 'off',
        "@next/next/no-img-element": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off"
    },
  }),
]

export default eslintConfig