/**
 * Created by GD on 11/10/13.
 */

/*
 * CALL /config/params.js
 */

var params = require('../../../config/params/mail');

/*
 * Setting of the mail system using module nodemailer
 */
var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: params.data.service,
    auth: {
        user: params.data.user,
        pass: params.data.pass
    }
});

/*
 * Events
 */
var event = require('events').EventEmitter;
var util = require('util');

/*
 * Export of the module mail
 */
function Mail(from, to, cc, bcc, replyTo, subject, text, html, generateTextFromHTML, headers){

    this.from = from;
    this.to = to;
    this.cc = cc;
    this.bcc = bcc;
    this.replyTo = replyTo;
    this.subject = subject;
    this.text = text;
    this.html = html;
    this.generateTextFromHTML = generateTextFromHTML;
    this.headers = headers;

    var self = this;
    event.call(self);
    this.send =  function() {

        var options = {
            from    : this.from,
            to      : this.to,
            cc      : this.cc,
            bcc     : this.bcc,
            replyTo : this.replyTo,
            subject : this.subject,
            text    : this.text,
            html    : this.html,
            generateTextFromHTML : this.generateTextFromHTML,
            headers : this.headers

        };

        smtpTransport.sendMail(options, function(err, success){
            if(err){
                self.emit('error', err);
            }
            if(success){
                self.emit('success', success);
            }
        });

    };
}

util.inherits(Mail, event);

module.exports = Mail;