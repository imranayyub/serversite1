const express = require('express');
const router = express.Router();

const  Musiclist=require('../api/models/musiclist');;

//retrieving music list
router.get('/', function (req, res, next) {
    Musiclist.find(function (err,musiclist) {
        res.json(musiclist);
    });

});


module.exports = router;
