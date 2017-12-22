const express = require('express');
const router = express.Router();

const   Musiclist=require('../api/models/musiclist');
// //retrieving music list
// router.get('/music', function (req, res, next) {
// Musiclist.find(function (err,musiclist) {
//     res.json(musiclist);
// });
//
// });

//Adding to music list
router.post('/', function (req, res, next) {
 var newMusiclist= new Musiclist({
     song_name: req.body.song_name,
     artist_name: req.body.artist_name,
     song_title: req.body.song_title,
     duration : req.body.duration,
     bitrate: req.body.bitrate,
     album_art: req.body.album_art,
     genre : req.body.genre,
     path: req.body.path
 });
 newMusiclist.save(function(err,musiclist){
     if(err)
     {
         res.json({msg:'Failed to add to Musiclist'});
     }
     else
     {
         res.json({msg:'Added successfully'});
     }
 });
});

module.exports = router;

