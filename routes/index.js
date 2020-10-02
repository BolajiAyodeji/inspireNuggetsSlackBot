var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("ET PHONE HOME!")
});

var commands = require('../lib/commands')

router.post('/commands/list', function(req, res, next) {
  res.send(commands.list())
});
router.post('/commands/add', function(req, res, next) {
  res.send(commands.add(req))
});
router.post('/commands/generate', function(req, res, next) {
  res.send(commands.generate(req))
});

module.exports = router;
