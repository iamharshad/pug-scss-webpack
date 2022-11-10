const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
    mode: 'none',
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
    // output filename of JS files
    filename: 'assets/js/[name].[contenthash:8].js'
  },

  entry: {
    // don't define scripts and styles in the Webpack entry,
    // all scripts and styles must be specified in Pug

    // define Pug files in entry:
    index: './src/views/index.pug',      // output index.html
    about: './src/views/about/index.pug' // output about.html
    // ...
  },

  plugins: [
    // enable using Pug files as entry point
    new PugPlugin({
      pretty: true, // formatting HTML, should be used in development mode only
      extractCss: {
        // output filename of CSS files
        filename: 'assets/css/[name].[contenthash:8].css'
      },
    })
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // the Pug loader
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
      },
    ],
  },
};