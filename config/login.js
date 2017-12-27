const express = require('express');
const router = express.Router();
// var sails=require('sails');
// var body_parser=require('body-parser');
// var cors=require('cors');
// var path=require('path');
const  User=require('../api/models/user');
// var app=express();
// app.use(body_parser);
// app.use(cors);
// app.use(sails);

router.post('/', function (req, res, next) {
  var username=req.body.username;
  var password=req.body.password;

  User.findOne({username : username, password : password},function (err,user) {
    res.setHeader('Content-Type', 'application/json');
    if(err)
    {
      console.log(err);
      return res.status(500).send();
    }
    if(!user)
    {
      return res.status(404).send(JSON.stringify({found : "not found"}));
    }
    return res.send(JSON.stringify({ found : "Found"}));

  });

});


module.exports = router;
