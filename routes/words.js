const express = require('express'),
    router = express.Router(),
    path = require('path'),
    randomWords = require('random-words'),
    visitCounter = require('express-visit-counter').Loader,
    moment = require('moment'),
    nodemailer = require('nodemailer'),
    EMAIL = process.env.EMAIL,
    EMAILPASSWORD = process.env.EMAILPASSWORD

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: EMAILPASSWORD
        }
      });
      

const words = randomWords(500);




router.get('/', async (req, res) => {
    let visitorsAltogether =  await visitCounter.getCount("/words");
    console.log('bisitoraltogher', visitorsAltogether)

        sendReport(visitorsAltogether);
        console.log('Traffic Report Sent')    

    res.send({words});
});
    

sendReport = (trafficCount) =>  {

    var mailOptions = {
        from: EMAIL,
        to: EMAIL,
        subject: 'FastType Traffic Report',
        text: `Number of visitors ${trafficCount} `
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}





module.exports = router;