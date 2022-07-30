const express = require('express')
const nodeMailer = require('nodemailer')

const route = express.Router();


route.post('/send-email', function (req, res) {
    try {
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: '',
                pass: ''
            }
        })

        let mailOptions = {
            from: req.body.From,
            to: "rahulsahni849@gmail.com",
            subject: "queries regarding products..",
            text: req.body.payload

        }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.send("Email send.");
        });
    } catch (err) {
        res.status(500).json(err);
    }

});


module.exports = route;