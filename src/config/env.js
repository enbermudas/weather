const dotenv = require('dotenv');

dotenv.config();

const { NODE_ENV, PORT, HOST, API_KEY } = process.env;

module.exports = {
  NODE_ENV: NODE_ENV || 'dev',
  HOST: HOST || '0.0.0.0',
  PORT: PORT || 8000,
  API_KEY: API_KEY || ''
};
