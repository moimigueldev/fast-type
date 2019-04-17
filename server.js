const express = require('express');
const path = require('path');
const app = express();
const randomWords = require('random-words');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist/fast-type')))


app.listen(port, () => {
    console.log(`listening on ports: ${port}`);
    console.log('random', randomWords(700))
    
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/fast-type/index.html'))
})
