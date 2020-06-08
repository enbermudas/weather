const dotenv = require('dotenv');

dotenv.config();

const { NODE_ENV, PORT, HOST } = process.env;

module.exports = {
  NODE_ENV: NODE_ENV || 'dev',
  HOST: HOST || '0.0.0.0',
  PORT: PORT || 8000
};
