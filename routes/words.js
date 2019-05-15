const express = require('express'),
    router = express.Router(),
    path = require('path'),
    randomWords = require('random-words'),
    visitCounter = require('express-visit-counter').Loader;



const words = randomWords(500);




router.get('/', async (req, res) => {
    let visitorsAltogether =  await visitCounter.getCount("/words");

    console.log('bisitoraltogher', visitorsAltogether)
    res.send({words});
})
    





module.exports = router;