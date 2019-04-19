const express = require('express');
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 3000;

const index = require('./routes/index'),
    words = require('./routes/words');

app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/fast-type')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/', index)
app.use('/words', words)


app.listen(port, () => {
    console.log(`listening on ports: ${port}`);
    
})

