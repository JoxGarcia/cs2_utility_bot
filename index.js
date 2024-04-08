const { GatewayIntentBits } = require("discord.js");
const { GBF, BuiltInCommands } = require("gbfcommands");
const path = require("path");
const client = new GBF({
  CommandsFolder: path.join(__dirname, "./Commands"),
  Prefix: "?",
  AutoLogin: true,
  LogActions: true,
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
  DisabledCommands: [BuiltInCommands.All],
});

module.exports = client;
