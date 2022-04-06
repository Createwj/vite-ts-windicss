module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  globals: {
    dataLayer: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json'
  ],
  plugins: ['vue', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        tabs: false,
        semi: false,
        parase: 'typescript',
        singleQuote: true,
        trailingComma: 'none'
      },
      {
        usePrettierrc: false
      }
    ],
    'no-unused-vars': 'off',

    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,

    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0
  }
}
