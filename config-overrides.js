
const path = require('path');

const rewiredLess = require('react-app-rewire-less');
module.exports = function (config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src')
  }
  config = rewiredLess(config, env);
  return config;
}
