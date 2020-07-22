# Airdrop-telegram-bot

## Description

Airdrop Telegram bot using javascript and firebase real time database

### Features

1. Command /start Introduction to the bot and rules description of the Airdrop.

   1. Join Telegram group
   2. Telegram Username
   3. Subscribe To Our Youtube Channel
   4. Follow Us on Twitter
   5. Mobile Number
   6. E-mail address
   7. ETH address (No exchange wallet!)
2. Commnad /project About the project and link to white paper.

## Getting Started

Step: 1

1. Create a Telegram bot at (@BotFather) <https://telegram.me/BotFather> and follow a few simple steps. Once you've created a bot and received your authorization token copy and keep it safe you will need it later.
2. Setup a unique bot name and must end with bot aslo you can set a description and a bot image as you desire.

3. On your code place this

```javascript
    const img_url = 'https://res.cloudinary.com/dbfydlpwo/image/upload/v1595278068/Airdrop-Telegram-Bot_oyxox2.jpg'
```

step: 2

1. Run the command below to install dependencies.
   $ npm install
2. Create a firebase project
3. Update config.js with your api keys and telegram bot key(do remember to change firebase database rules).

   1. Telegram Access Token

```javascript
   var token = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

   2. Firebase Configuration

```javascript
      var config = {
        apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        authDomain: "XXXXXXXXXXX.firebaseapp.com",
        databaseURL: "https://XXXXXXXXX.firebaseio.com/",
        projectId: "XXXXXXXX",
        storageBucket: "XXXXXXXXXXXX.appspot.com",
        messagingSenderId: "XXXXXXXXXXXXX",
        appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        measurementId: "X-XXXXXXXXX"
     };
```

4. Run the command below to start chatting with the bot
    $ node index
5. To run it on server go to a VPS and make it happen

MIT License

Copyright (c) 2020 Jordan Muthemba

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
