const Discord = require('discord.js')
const Client = new Discord.Client();
const OwnerID = "130515926117253122"

const prefix = "!"

Client.on("ready", () => {
	console.log("online");
	Client.user.setGame("!help for cmds")
});

// welcome message

Client.on("guildMemberAdd", member => {
   member.guild.defaultChannel.send("Welcome to: " + member.guild.name + " Hope you enjoy it here")
});

Client.on("guildCreate", guild => {
	console.log("Some one added the test bot to a server created by: " + guild.owner.user.username)
});

Client.on("message", message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split("").slice(1);
	
	if (command === "ping") {
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);
	}

	if (command == "help") {
		message.reply("I have sent you cmds in dms")
		message.author.send("Cmd List: ",
		"!ping - bot will respond with pong")
	}

});

Client.login("MzQxNDc5NTYwNjA2NjQ2Mjcz.DGBrIg._GlRaK0EnvLZv0_CnYTtuNOhvFo");