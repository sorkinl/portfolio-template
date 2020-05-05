const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors')({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const emailToRelay = functions.config().gmail.emailtorelay;


const mailTransport = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
}));
exports.submit = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      if (req.method !== 'POST') {
        return
      }
  
      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: emailToRelay,
        subject: `${req.body.name} just messaged me from my website`,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
      }
  
      return mailTransport.sendMail(mailOptions).then(() => {
        console.log('New email sent to:', gmailEmail)
        res.status(200).send({ isEmailSend: true })
        return
      })
    })
  })
