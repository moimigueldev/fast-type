const express = require('express'),
    router = express.Router(),
    path = require('path'),
    randomWords = require('random-words');


const words = randomWords(500);




router.get('/', (req, res) => {
    console.log('words url hit');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.send({words});
})
    





module.exports = router;