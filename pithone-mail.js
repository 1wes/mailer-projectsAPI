const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const { pithoneEmail, pithonePassword, host, mailPort } = require('./env-config');

const transporter = nodemailer.createTransport({
    host: host,
    port: mailPort,
    secure: false,
    auth: {
        user: pithoneEmail,
        pass: pithonePassword
    },
    tls: {
        rejectUnauthorized: false
    }
});

transporter.verify(err=>{

    if(err){
        console.log(err);
    }else{
        console.log("mail server ready");
    }
});

router.post("/pithone-mail", (req, res) => {

    let { name, email, message } = req.body;

    let mailOptions = {
        from: email,
        to: pithoneEmail,
        subject: `Message From ${name}`,
        text: message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        
        if (error) {
            res.sendStatus(503);
        } else {
            console.log("message sent", info.messageId)
            res.sendStatus(200);
        }
    })
});

module.exports = router;