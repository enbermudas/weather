const dotenv = require('dotenv');

dotenv.config();

const {
  NODE_ENV,
  PORT,
  HOST,
  WEATHER_BIT_API_KEY,
  IPAPI_API_KEY
} = process.env;

module.exports = {
  NODE_ENV: NODE_ENV || 'dev',
  HOST: HOST || '0.0.0.0',
  PORT: PORT || 8000,
  WB_KEY: WEATHER_BIT_API_KEY || '',
  IP_KEY: IPAPI_API_KEY || ''
};
