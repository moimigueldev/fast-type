const express = require('express'),
    router = express.Router(),
    path = require('path');

    leaderBoard = [
        leaderOne=   {
            name: 'Ultimate Beast',
            score: 10
        },
        leaderTwo=  {
            name: 'Masked Titan',
            score: 15
        },
        leaderThree=  {
            name: 'Oranolio',
            score: 20
        },
        leaderFour=  {
            name: 'Popularkiya',
            score: 30
        },
        leaderFive=  {
            name: 'Bootecia',
            score: 40
        },
    ];

  



router.get('/', (req, res) => {
    console.log('leaderboard url hit');
    
    res.send({leaderBoard})
})
    





module.exports = router;