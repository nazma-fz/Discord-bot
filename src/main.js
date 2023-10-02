
require('dotenv').config();
const {Client,IntentsBitField} = require('discord.js');

const client = new Client({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const quotes = require('./quotes.js');

client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready`);
})

client.on('interactionCreate', (interaction ) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'quotes') {
    interaction.reply(quotes.randomQuote());
    console.log("success");
  }
}
);

client.login(process.env.TOKEN);