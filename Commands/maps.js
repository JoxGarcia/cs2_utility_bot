const { MessageCommand } = require("gbfcommands");

const maps = require("../fixture/maps.json");
const lineups = require("../fixture/lineups.json");
let mapsEmbed = require("../embeds/mapsEmbed");

class MapsCommand extends MessageCommand {
  constructor(client) {
    super(client, {
      name: "maps",
      description: "Replies",
      async execute({ client, message, args }) {
        let data = [];
        maps.activePool.forEach((map) => {
          let emojiID = message.guild.emojis.cache.find(
            (id) => id.name === `De_${map}`
          );
          const positions = lineups[map]
            ? Object.keys(lineups[map])
            : "Coming Soon";
          data.push({
            name: `${emojiID} - ${map}`,
            value: positions.toString(),
          });
        });
        mapsEmbed.fields = data;

        return message.reply({
          embeds: [mapsEmbed],
        });
      },
    });
  }
}

module.exports = MapsCommand;
