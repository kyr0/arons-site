const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const gmailEmailAddress = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

admin.initializeApp();

const sendEMail = function (email) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailEmailAddress,
            pass: gmailPassword
        }
    });

    const message = email.firstName + ' ' + email.lastName + ' (' + email.email + ', ' + (email.phone || '-') + ') said: ' + email.message;

    const mailOptions = {
        from: gmailEmailAddress,
        to: 'info@aron-homberg.de',
        subject: 'arons.site: get in touch message',
        text: message,
        html: message 
    };

    const getDeliveryStatus = function (error, info) {
        if (error) {
            return console.log(error);
        }
    };
    transporter.sendMail(mailOptions, getDeliveryStatus);
};

// .onDataAdded is watches for changes in database
exports.onDataAdded = functions.database.ref('/emails/{sessionId}').onCreate(function(snap, context) {
    sendEMail(snap.val());
});
