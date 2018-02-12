const Discord = require("discord.js");

const TOKEN = "NDEyNDAzNjQ4NDM0NDA1Mzc2.DWKb3Q.rgMpqzUJZEmgfycIff9BVBataZo";

var schedule = require('node-schedule');
var bot = new Discord.Client();

bot.on('ready', () => {
    var channel = bot.channels.get("name", "general");

    var rule = new schedule.RecurrenceRule();
    rule.minute = 7;
 
    var j = schedule.scheduleJob(rule, function(){
    bot.channels.get("id", channel).sendMessage("Master, master! Please EAT SOMETHING right meow!");
    })

    console.log("Bot is ready.");
});

bot.login(process.env.BOT_TOKEN);
