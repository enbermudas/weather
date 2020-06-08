const app = require('./config/express');
const { NODE_ENV, PORT, HOST } = require('./config/env');

const server = app.listen(PORT, () =>
  console.log(`🚀 http://${HOST}:${PORT} [${NODE_ENV}]`)
);

module.exports = server;
