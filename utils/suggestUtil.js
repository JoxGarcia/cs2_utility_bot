const maps = require("../fixture/maps.json");

class SuggestUtil {
  static validateInputs(interaction) {
    const activePool = maps.activePool.map((mapName) => mapName.toLowerCase());
    const userInput_map = interaction.options.getString("map").toLowerCase();
    const userInput_type = interaction.options.getString("type").toLowerCase();
    const userInput_lineup = interaction.options.getString("lineup");

    if (!activePool.includes(userInput_map)) {
      return `The map "${userInput_map}" is not in the active pool.`;
    }

    if (!["molly", "smoke", "flash"].includes(userInput_type)) {
      return `The type "${userInput_type}" is not valid. It must be 'molly', 'smoke', or 'flash'.`;
    }

    const imgurLinkRegex = /^(https?:\/\/)?(www\.)?imgur\.com\/[a-zA-Z0-9]+$/;
    if (!imgurLinkRegex.test(userInput_lineup)) {
      console.log(3);
      return `The provided lineup "${userInput_lineup}" is not a valid Imgur link.`;
    }

    return `The lineup has been analyzed and the information saved.`;

    // return {
    //   map: userInput_map,
    //   type: userInput_type,
    //   lineup: userInput_lineup,
    // };
  }
}

module.exports = SuggestUtil;
