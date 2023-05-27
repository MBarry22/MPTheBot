require('dotenv').config();
const config = require('../discordbot/config.json')
const { Client, IntentsBitField, EmbedBuilder  } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});
// Hey Command
client.on('interactionCreate', (interaction) => {
	if (!interaction.isChatInputCommand()) return;
  
	if (interaction.commandName === 'hey') {
	  return interaction.reply('hey!');
	}
  
	if (interaction.commandName === 'ping') {
	  return interaction.reply('Pong!');
	}
  });
  // Options Command
  client.on('interactionCreate', (interaction) => {
	if (!interaction.isChatInputCommand()) return;
  
	if (interaction.commandName === 'add') {
	  const num1 = interaction.options.get('first-number').value;
	  const num2 = interaction.options.get('second-number').value;
  
	  interaction.reply(`The sum is ${num1 + num2}`);
	}
  });

  // Embed for /legend
  client.on('interactionCreate', (interaction) => {
	if (!interaction.isChatInputCommand()) return;
  
	if (interaction.commandName === 'legend') {
	  const embed = new EmbedBuilder()
	  .setAuthor({
		name: "Mason Porter || Yawn",
		url: "https://masonporter.ca",
		iconURL: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
	  })
	  .setTitle("masonporter.ca")
	  .setURL("https://masonporter.ca")
	  .setDescription("`Guess what, did you know I am a legend?.`")
	  .addFields(
		{
		  name: "No like actually",
		  value: "Just believe me. Don't ask about it.",
		},
	  )
	  .setImage("https://images.unsplash.com/photo-1514790193030-c89d266d5a9d")
	  .setThumbnail("https://img.icons8.com/fluency-systems-filled/48/verified-account.png")
	  .setColor("#8700f5")
	  .setFooter({
		text: "Copyright © 2023 Mason Porter",
		iconURL: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
	  })
	  .setTimestamp();
  
	  interaction.reply({ embeds: [embed] });
	}
  });
  
  // Sent when legend is used
  /*
  client.on('messageCreate', (message) => {
	if (message.content === 'legend') {
		const exampleEmbed = new EmbedBuilder()
		.setAuthor({
			name: "Mason Porter || Yawn",
			url: "https://masonporter.ca",
			iconURL: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
		  })
		  .setTitle("masonporter.ca")
		  .setURL("https://masonporter.ca")
		  .setDescription("`Guess what, did you know I am a legend?.`")
		  .addFields(
			{
			  name: "No like actually",
			  value: "Just believe me. Don't ask about it.",
			},
		  )
		  .setImage("https://images.unsplash.com/photo-1514790193030-c89d266d5a9d")
		  .setThumbnail("https://img.icons8.com/fluency-systems-filled/48/verified-account.png")
		  .setColor("#8700f5")
		  .setFooter({
			text: "Copyright © 2023 Mason Porter",
			iconURL: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
		  })
		  .setTimestamp();
	channel.send({ embeds: [exampleEmbed] });
	}
  });
  */

client.login(config.token);