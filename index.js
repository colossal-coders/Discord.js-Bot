//Discord Bot Setup Code, Variable Assignment, Etc.
const Discord = require('discord.js');
const bot = new Discord.Client();
const Prefix = "$:"

//Discord "On Ready" Sub Process
bot.on("ready", function() {
	console.log("Successfully Connected to Discord, Bot is Ready!");
});
