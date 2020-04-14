const Backendless = require('backendless');

const BackendlessConfig = require('../backendless.json');

if (BackendlessConfig.serverURL) {
  Backendless.serverURL = BackendlessConfig.serverURL;
}

if (BackendlessConfig.debugMode) {
  Backendless.debugMode = BackendlessConfig.debugMode;
}

Backendless.initApp(BackendlessConfig.APP_ID, BackendlessConfig.API_KEY);

module.exports = Backendless;
