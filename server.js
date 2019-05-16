require('dotenv').config()
const express = require('express');
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    visitCounter = require('express-visit-counter'), 
    cron = require('cron');


    app.use(visitCounter.initialize());

   

const index = require('./routes/index'),
        words = require('./routes/words'),
        leaderboard = require('./routes/leaderboard');

app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/fast-type')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.use('/', index);
app.use('/words', words);
app.use('/leaderboard', leaderboard)


app.listen(port, () => {
    console.log(`listening on ports: ${port}`);
    
});




const cronJob = cron.job('* * * * * *', async function(){
    // perform operation e.g. GET request http.get() etc.
   
    
}); 

