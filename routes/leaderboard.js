const express = require('express'),
    router = express.Router(),
    path = require('path'),
    mongoose = require('mongoose');

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


    

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

const Schema = mongoose.Schema()

const LeaderBoardSchema = new mongoose.Schema({
   leaderBoard:{
    leaderOne :   {
        name: String,
        score: Number
    },
    leaderTwo :  {
        name: String,
        score: Number
    },
    leaderThree :  {
        name: String,
        score: Number
    },
    leaderFour :  {
        name: String,
        score:Number
    },
    leaderFive :  {
        name: String,
        score: Number
    }
   }
  }, {collection: 'leaderboard-data'});

const PlayerData = mongoose.model('PlayerData', LeaderBoardSchema)

  



router.get('/', (req, res) => {
    console.log('leaderboard url hit');

    const player = {
        userName: 'Moises', 
        score: 123
    }

    // const data = new PlayerData(player);
    // data.save();

    PlayerData.find().then((doc) => {
        
    })
      
    
    res.send({leaderBoard})
});

router.put('/', (req, res) => {
    const newLeaderboard = req.body.leaderBoard;
    leaderBoard = newLeaderboard;

        

       
    console.log('got the new leaderboard', leaderBoard[0]);
    res.send(leaderBoard)
})
    





module.exports = router;