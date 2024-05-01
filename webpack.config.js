module.exports = {
  devtool: "source-map",
  mode: 'development',
  entry: ['./src/main.js'],
  output: {
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  }	
};