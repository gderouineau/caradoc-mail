![caradoc logo](http://f.cl.ly/items/2v0d202T0D3Y271K431Q/caradoc_logo.png)



```js
var Mail = require('caradoc-mail');
var mail  = new Mail();
    mail.from = "from";
    mail.to = "to";
    mail.subject = "subject";
    mail.html = "html";
    mail.send();
    mail
       .on('error', function(error){
            console.log("some error occured");
            console.log(error);
       })
       .on('success', function(success){
            console.log("mail send");
            console.log(success.message);
       })
    ;


## Installation

    $ npm -g install caradoc-mail


## Info

    You need to renseign your config/params/mail.js file to use it

## Mail() methods
The following are the possible fields of an e-mail message:

  - **from** - The e-mail address of the sender. All e-mail addresses can be plain `sender@server.com` or formatted `Sender Name <sender@server.com>`
  - **to** - Comma separated list or an array of recipients e-mail addresses that will appear on the `To:` field
  - **cc** - Comma separated list or an array of recipients e-mail addresses that will appear on the `Cc:` field
  - **bcc** - Comma separated list or an array of recipients e-mail addresses that will appear on the `Bcc:` field
  - **replyTo** - An e-mail address that will appear on the `Reply-To:` field
  - **subject** - The subject of the e-mail
  - **text** - The plaintext version of the message
  - **html** - The HTML version of the message
  - **generateTextFromHTML** - if set to true uses HTML to generate plain text body part from the HTML if the text is not defined
  - **headers** - An object of additional header fields `{"X-Key-Name": "key value"}` (NB! values are passed as is, you should do your own encoding to 7bit and folding if needed)

## License

(The MIT License)

Copyright (c) 2012-2013 g derouineau &lt;admin@caradoc.fr&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
