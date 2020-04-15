if (BackendlessConfig.serverURL) {
  Backendless.serverURL = BackendlessConfig.serverURL;
}

if (BackendlessConfig.debugMode) {
  Backendless.debugMode = BackendlessConfig.debugMode;
}

Backendless.initApp(BackendlessConfig.APP_ID, BackendlessConfig.API_KEY);
