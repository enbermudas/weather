const express = require('express');
const weather = require('../config/weather-bit');

const router = express.Router();

router.post('/current', async (req, res) => {
  const result = await weather.current(req.body.name);
  return res.status(result.code).send(result);
});

router.post('/forecast', async (req, res) => {
  const result = await weather.forecast(req.body.name);
  return res.status(result.code).send(result);
});

module.exports = router;
