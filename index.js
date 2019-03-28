//Discord Bot Setup Code, Variable Assignment, Etc.
const Discord = require('discord.js');
const bot = new Discord.Client();
const Prefix = "$:"
const Token = "Token Here"

//Discord "On Ready" Function
bot.on("ready", function() {
	console.log("Successfully Connected to Discord, Bot is Ready!");
});

//Discord "On Message" Function
bot.on("message", function(message) {
	if (message.author.equals(bot.user)) return;
	if (!message.content.startsWith(Prefix)) return;
	var args = message.content.substring(Prefix.length).split(" ");
	switch (args[0].toLowerCase()) {
		case "Test":
			message.channel.send("Hello World!");
		break;
	}
});

//Discord Bot Login Function
bot.login(Token);
