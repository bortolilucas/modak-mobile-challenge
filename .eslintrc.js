module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['obsidian'],
  rules: {
    'obsidian/unresolved-provider-dependencies': 'error',
    'obsidian/no-circular-dependencies': 'error',
    'obsidian/strongly-typed-inject-component': 'error',
  },
};
