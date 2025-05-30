const express = require('express');
const router = express.Router();
const { handleAppCreation } = require('../controllers/appController');

router.post('/', handleAppCreation);

module.exports = router;
router.get('/', (req, res) => {
  res.send('API build app is working!');
});
