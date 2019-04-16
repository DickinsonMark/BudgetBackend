const express = require('express');
const router = express.Router();

const getController = require('../controllers/get');

router.get('/', function (req, res, next) {
  console.log(getController.getRegister(req));
  res.;
});

module.exports = router;
