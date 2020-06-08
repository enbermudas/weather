const dotenv = require('dotenv');

dotenv.config();

const { NODE_ENV } = process.env;

module.exports = {
  NODE_ENV: NODE_ENV || 'dev'
};
