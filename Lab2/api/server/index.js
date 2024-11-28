const app = require("./bootstrap.js");
const port = process.env.PORT || 3000;
const serverless = require('serverless-http');

const server = app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

module.exports = app;
module.exports.handler = serverless(app);
