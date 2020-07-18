module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@constants': './src/constants',
          '@reducers': './src/reducers',
          '@screens': './src/screens',
          '@selectors': './src/selectors',
          '@actions': './src/actions',
          '@model': './src/model',
        },
      },
    ],
  ],
};
