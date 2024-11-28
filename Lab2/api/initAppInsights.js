const appInsights = require('applicationinsights');

let isInitialized = false;

module.exports = function () {
    if (!isInitialized) {
        const connectionString = process.env['APPLICATIONINSIGHTS_CONNECTION_STRING'];

        if (connectionString) {
            appInsights.setup(connectionString)
                .setAutoCollectConsole(true, true)
                .setAutoCollectExceptions(true)
                .setSendLiveMetrics(false)
                .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
                .start();

            isInitialized = true;
        } else {
            console.warn('Application Insights was not configured. Please set Umgebungsvariable APPLICATIONINSIGHTS_CONNECTION_STRING.');
        }
    }
};
