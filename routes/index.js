var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("ET PHONE HOME!")
});

var commands = require('../lib/commands')

router.post('/commands/generate', async function(req, res, next) {
  res.send(await commands.generate(req))
});

module.exports = router;
