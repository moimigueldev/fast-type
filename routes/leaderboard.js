const express = require('express'),
    router = express.Router(),
    path = require('path');

    leaderBoard = [
        leaderOne=   {
            name: 'Ultimate Beast',
            score: 2
        },
        leaderTwo=  {
            name: 'Masked Titan',
            score: 9
        },
        leaderThree=  {
            name: 'Oranolio',
            score: 7
        },
        leaderFour=  {
            name: 'Popularkiya',
            score:1
        },
        leaderFive=  {
            name: 'Bootecia',
            score: 11
        },
    ];

  



router.get('/', (req, res) => {
    console.log('leaderboard url hit');
    
    res.send({leaderBoard})
});

router.put('/', (req, res) => {
    const newLeaderboard = req.body.leaderBoard;
    leaderBoard = newLeaderboard;

    console.log('got the new leaderboard', leaderBoard);
    res.send(leaderBoard)
})
    





module.exports = router;