module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@': './src',
        },
      },
    ],
    'react-obsidian/dist/transformers/babel-plugin-obsidian',
    ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
  ],
};
