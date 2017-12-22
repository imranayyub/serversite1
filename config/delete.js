const express = require('express');
const router = express.Router();

const  Musiclist=require('../api/models/musiclist');

//Deleting from music list
router.post('/:id', function (req, res, next) {
    // res.send('Retrieving the Music list');
    Musiclist.remove({_id:req.params.id},function (err,result) {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });


});

module.exports = router;

