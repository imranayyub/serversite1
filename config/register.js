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
  res.setHeader('Content-Type', 'application/json');
  if(err)
  {
    console.log(err);
    return res.status(500).send();
  }
  // res.send();
  return res.status(200).send(JSON.stringify({ username: username , password : password , phone: phone}, null, 3));
});

});

module.exports = router;
