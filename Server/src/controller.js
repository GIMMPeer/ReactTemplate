const express = require('express');
const router = express.Router();
const dao = require('./dao');
const path = require('path');

router.get('/', example);
router.get('/test', testMessage);

module.exports = router;

function example(req, res, next) {
  res.json({"message" : "Hello and welcome to the backrooms!"});
}
//req = resquest res= response next = ??? not sure Jon doesn't use it
function testMessage(req, res, next) {
    dao.exampleAction(req.body)
        .then(user => res.json(user))
        .catch(err => res.json ({err}));
  }
  
