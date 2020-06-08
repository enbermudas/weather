const express = require('express');
const weather = require('../config/weather-bit');

const router = express.Router();

router.post('/current', async (req, res) => {
  const result = await weather.current(req.body.name);
  return res.status(200).send(result);
});

module.exports = router;
