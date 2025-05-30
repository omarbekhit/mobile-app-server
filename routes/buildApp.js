const express = require('express');
const router = express.Router();
const { handleAppCreation } = require('../controllers/appController');

router.post('/', handleAppCreation);

router.get('/', (req, res) => {
  res.send('API build app is working!');
});

module.exports = router;
