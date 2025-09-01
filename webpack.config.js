const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    background: './src/background/background.ts',
    popup: './src/popup/popup.ts',
    content: './src/content/content.ts',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Processa arquivos .ts
        exclude: /node_modules/,
        use: 'ts-loader', // Usa ts-loader para compilar TypeScript
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "manifest.json", to: "manifest.json" },
        { from: 'src/popup/popup.html', to: '.' },
        { from: 'src/popup/popup.css', to: '.' },
      ],
    }),
  ],
};