const { ApplicationCommandOptionType } = require("discord.js");
const { SlashCommand } = require("gbfcommands");
const SuggestUtil = require("../utils/suggestUtil"); // Asegúrate de tener la ruta correcta al archivo

module.exports = class suggestCommand extends SlashCommand {
  constructor(client) {
    super(client, {
      name: "suggest",
      description: "Suggest a new smoke/molly/flash lineup",
      options: [
        {
          name: "map",
          description: "Enter map that want the lineup",
          type: ApplicationCommandOptionType.String,
          max_length: 300,
          required: true,
        },
        {
          name: "type",
          description: "molly/flash/smoke",
          type: ApplicationCommandOptionType.String,
          max_length: 5,
          required: true,
        },
        {
          name: "lineup",
          description: "Enter Imgur gif lineup",
          type: ApplicationCommandOptionType.String,
          max_length: 2048,
          required: true,
        },
      ],
      async execute({ client, interaction }) {
        const validatedInputs = SuggestUtil.validateInputs(interaction);
        return interaction.reply({
          content: validatedInputs,
        });
      },
    });
  }
};
