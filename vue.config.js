// eslint-disable-next-line import/no-extraneous-dependencies
const Webpack = require('webpack');

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(new Webpack.DefinePlugin({
      'process.env.API_URL': '"http://localhost:3000/api/v1"',
    }));
  },
  lintOnSave: true,
};
