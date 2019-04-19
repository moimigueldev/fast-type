const express = require('express'),
    router = express.Router(),
    path = require('path');



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/fast-type/index.html'))
})
    





module.exports = router;