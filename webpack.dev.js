const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
		index: './src/js/index.js',
		about: './src/js/about.js',
		contacts: './src/js/contacts.js'
    
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080
	},
	
	// https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/about.html',
        inject: true,
        chunks: ['about'],
        filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/contacts.html',
        inject: true,
        chunks: ['contacts'],
        filename: 'contacts.html'
    })
  ]
};