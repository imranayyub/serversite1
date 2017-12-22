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
var phone=req.body.phone;

var newuser = new User;
newuser.username=username;
newuser.password=password;
newuser.phone=phone;

newuser.save(function (err,saveduser) {
  if(err)
  {
    console.log(err);
    return res.status(500).send();
  }
  // res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.stringify({ a: 1 }, null, 3));
  return res.status(200).send("Successfully registered");
});

});

module.exports = router;
