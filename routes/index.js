var express = require('express');
var db = require('../model/helper')

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("hello2");
});

router.get('/entries', async function(req, res, next) {
  try {
    const response = await db('SELECT * from entries;')
    const entries = response.data
    
    res.send(entries);
  } catch(error) {
    res.status(500).send()
  }
});

module.exports = router;
