require('dotenv').config();
const config = require('../discordbot/config.json')
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    
    {
        name: 'add',
        description: 'Adds two numbers.',
        options: [
          {
            name: 'first-number',
            description: 'The first number.',
            type: ApplicationCommandOptionType.Number,
            choices: [
              {
                name: 'one',
                value: '1',
              },
              {
                name: 'two',
                value: '2',
              },
              {
                name: 'three',
                value: '3',
              },
            ],
            required: true,
          },
          {
            name: 'second-number',
            description: 'The second number.',
            type: ApplicationCommandOptionType.Number,
            required: true,
          },
        ],
      },
  {
    name: 'hey',
    description: 'Replies with hey!',
  },
  {
    name: 'ping',
    description: 'Pong!',
  },
  {
    name: 'legend',
    description: 'Sends an embed about Yawn being a legend!',
  },
];

const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        config.clientId,
        config.guildId
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();