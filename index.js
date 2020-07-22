process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
var config = require('./config')
var firebase = require('firebase')

// firebase config
var firebase_config = config.firebase_config;
// replace the value below with the Telegram token you receive from @BotFather
var token = config.token;
firebase.initializeApp(firebase_config);

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });
const img_url = 'https://res.cloudinary.com/dbfydlpwo/image/upload/v1595278068/Airdrop-Telegram-Bot_oyxox2.jpg'

// variables to send to db
var t_username = '';
var u_email = '';
var e_wallet = '';
var t_mobileno = '';

bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendPhoto(chatId, img_url, {
            caption: "Welcome to Ubricoin Airdrop! 😍😍\nJoin Ubricoin Community on Telegram and earn 50 Ubricoin Tokens\n \n"
        }).then(() => {
            var option = {
                "reply_markup": {
                    "keyboard": [
                        ["1. Join Telegram group", "2. Subscribe to Youtube", "3. Telegram Username", ],
                        ["4. Follow Us on Twitter", "5. Mobile Number", "6. E-mail address", "7. ETH address (No exchange wallet!)"]
                    ]
                }
            };
            bot.sendMessage(chatId, "Airdrop Rules ⚔️⚔️ \n 1. Join Our Telegram group. \n 2. Subscribe to Our Youtube. \n 3. Your Telegram Username.  \n 4. Follow Us on Twitter. \n 5. Your Mobile Number. \n 6. Your E-mail address. \n 7. ETH address (No exchange wallet!). \n Visit https://ubricoin.com for more information \n", option);
        })
    })
    // Say Hello to bot
bot.on('message', (msg) => {
    var send_txt1 = msg.text;
    var send_msg = "Hi";
    if (send_txt1.toString().indexOf(send_msg) === 0) {
        bot.sendMessage(msg.chat.id, "Hello I am smart bot from Ubricoin, start the task list by replying \n /start \n /project")
    }
});

bot.on('message', (msg) => {
    var send_txt1 = msg.text;
    var send_msg = "hi";
    if (send_txt1.toString().indexOf(send_msg) === 0) {
        bot.sendMessage(msg.chat.id, "Hello I am smart bot from Ubricoin, start the task list by replying \n /start \n /project")
    }
});
// Information about project
bot.on('message', (msg) => {
    var send_txt2 = msg.text;
    var re = /project/i;
    if (re.test(send_txt2)) {

        var keyboardStr = JSON.stringify({
            inline_keyboard: [
                [
                    { text: 'View Whitepaper', url: 'https://ubricoin.com/pdf/ubricoin-whitepaper.pdf' }
                ]
            ]
        });
        var keyboard = { reply_markup: JSON.parse(keyboardStr) };
        bot.sendMessage(msg.chat.id, "You can also have a look at our whitepaper to know more about our project.", keyboard);
    }
});
// Options for the user to fill
// Step 1 -Option +1(901)591-3110
bot.on('message', (msg) => {
    var send_txt = msg.text;
    var step1_txt = '1. Join Telegram group';
    if (send_txt.toString().indexOf(step1_txt) === 0) {
        var text = 'Ubricoin Official Telegram Group';
        var keyboardStr = JSON.stringify({
            inline_keyboard: [
                [
                    { text: 'Join the chat 🦜', url: 'https://t.me/joinchat/I1wWclDFE7wLw9YC_dE3yA' }
                ]
            ]
        });
        var keyboard = { reply_markup: JSON.parse(keyboardStr) };
        bot.sendMessage(msg.chat.id, text, keyboard);
    }
    // Youtube channel
    // Step 2 -Option
    var step2_txt = '2. Subscribe to Youtube';
    if (send_txt.toString().indexOf(step2_txt) === 0) {
        var text = 'The Ubrican Youtube Channel';
        var keyboardStr = JSON.stringify({
            inline_keyboard: [
                [
                    { text: 'Subscribe to Youtube 🎥', url: 'https://www.youtube.com/channel/UCEwEyormGT4WHR-PBvh23Mw?sub_confirmation=1' }
                ]
            ]
        });
        var keyboard = { reply_markup: JSON.parse(keyboardStr) };
        bot.sendMessage(msg.chat.id, text, keyboard);
    }
    // @username
    // Step 3 -Option
    var step3_txt = '3. Telegram Username';
    if (send_txt.toString().indexOf(step3_txt) === 0) {
        bot.sendMessage(msg.chat.id, 'Please Enter Your Telegram Username (@username)');
    }

    if (send_txt.toString().charAt(0) === '@') {
        t_username = send_txt;
        var option = {
            "reply_markup": {
                "keyboard": [
                    ["1. Join Telegram group", "2. Subscribe to Youtube", "3. Telegram Username", ],
                    ["4. Follow Us on Twitter", "5. Mobile Number", "6. E-mail address", "7. ETH address (No exchange wallet!)"]
                ]
            }
        };
        bot.sendMessage(msg.chat.id, "Hello " + send_txt, option);

    }
    // Follow on Twitter
    // Step 4 -Option
    var step4_txt = '4. Follow Us on Twitter';
    if (send_txt.toString().indexOf(step4_txt) === 0) {
        var text = 'Follow Ubricoin Twitter Handle';
        var keyboardStr = JSON.stringify({
            inline_keyboard: [
                [
                    { text: 'Follow On Twitter @ubricoin', url: 'https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonType%3DFollowButton%26query%3Dhttps%253A%252F%252Ftwitter.com%252Fubricoin%26widget%3DButton&ref_src=twsrc%5Etfw&screen_name=ubricoin&tw_p=followbutton' }
                ]
            ]
        });
        var keyboard = { reply_markup: JSON.parse(keyboardStr) };
        bot.sendMessage(msg.chat.id, text, keyboard);
    }
    // Mobile Number
    // Step 5 -Option
    var step5_txt = '5. Mobile Number';
    if (send_txt.toString().indexOf(step5_txt) === 0) {
        bot.sendMessage(msg.chat.id, 'Please Enter your Mobile Number, please maintain this format +254-XXX-XXX-XXX');
    }
    if (send_txt.length === 13) {
        t_mobileno = send_txt;
        var option = {
            reply_markup: {
                keyboard: [
                    ["1. Join Telegram group", "2. Subscribe to Youtube", "3. Telegram Username", ],
                    ["4. Follow Us on Twitter", "5. Mobile Number", "6. E-mail address", "7. ETH address (No exchange wallet!)"]
                ]
            }
        };
        bot.sendMessage(msg.chat.id, 'Your Number is ' + send_txt, option);
    }
    // Email Address
    // Step 6 -Option
    var step6_txt = '6. E-mail address';
    if (send_txt.toString().indexOf(step6_txt) === 0) {
        bot.sendMessage(msg.chat.id, 'Please Enter your Email Address');
    }

    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;

    if (re.test(send_txt)) {
        u_email = send_txt;
        var option = {
            reply_markup: {
                keyboard: [
                    ["1. Join Telegram group", "2. Subscribe to Youtube", "3. Telegram Username", ],
                    ["4. Follow Us on Twitter", "5. Mobile Number", "6. E-mail address", "7. ETH address (No exchange wallet!)"]
                ]
            }
        };
        bot.sendMessage(msg.chat.id, 'Your email address is: ' + send_txt, option);
    }
    // ETH Address
    // Step 7 -Option
    var step7_txt = '7. ETH address (No exchange wallet!)';
    if (send_txt.toString().indexOf(step7_txt) === 0) {
        bot.sendMessage(msg.chat.id, "Make sure that you have an ERC20 wallet (0x) 🔑");
    }
    var re_eth = /^0x[a-fA-F0-9]{40}$/g
    if (re_eth.test(send_txt)) {
        e_wallet = send_txt;
        bot.sendMessage(msg.chat.id, 'Confirm❓', {
            reply_markup: {
                keyboard: [
                    [{ "text": "Yes ✅" }],
                    [{ "text": "Cancel ❌" }]
                ],
                resize_keyboard: true
            }
        })
    }
    var confirm = 'Yes ✅';
    if (send_txt.toString().indexOf(confirm) === 0) {
        var db = firebase.database().ref();
        db.child(e_wallet.toLocaleLowerCase()).once('value', snap => {
            if (!snap.exists()) {
                db.child(e_wallet.toLocaleLowerCase()).update({
                    telegram_username: t_username,
                    email: u_email,
                    mobilnumber: t_mobileno,
                    wallet: e_wallet.toLocaleLowerCase(),
                    status: 'Pending',
                    createAt: Date.now()
                }).then(() => {
                    bot.sendMessage(msg.chat.id, "Thank'you 🙏🙏 \n You have earned 50 UBNs 🎊🎊 \n Wait Until airdrop end...");
                    bot.sendMessage(msg.chat.id, `Telegram username: ${t_username} \n Email: ${u_email} \n Ethereum wallet: ${e_wallet} \n Visit https://ubricoin.com for more.\n`).then(() => {})
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                bot.sendMessage(msg.chat.id, "This wallet is already in use!!");
            }
        })
    }
    var cancel = 'Cancel ❌';
    if (send_txt.toString().indexOf(cancel) === 0) {
        bot.sendMessage(msg.chat.id, "Good bye ✌️✌️");
    }
});