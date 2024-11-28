const app = require("./bootstrap.js");
const serverless = require('serverless-http');

module.exports = app;
module.exports.handler = serverless(app);
