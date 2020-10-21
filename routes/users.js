var express = require('express');
var router = express.Router();
var {save} = require("../src/services/userServices")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(404).send("OK Mom")
});
router.post('/', function(req, res, next) {
  save(req, res);
});

module.exports = router;
