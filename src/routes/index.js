const express = require('express');
const weather = require('./weather');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send({ message: 'online' }));
router.use('/weather', weather);

module.exports = router;
