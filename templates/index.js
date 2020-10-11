const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const client = new Discord.Client();
client.config = require("./config.js");
require("./modules/functions.js")(client);
client.commands = new Enmap();
client.aliases = new Enmap();
client.settings = new Enmap({
  name: "settings",
  fetchAll: true,
  autoFetch: true,
  cloneLevel: 'deep'
});
const init = async () => {
  const cmdFiles = await readdir("./commands/");
  console.log(`${cmdFiles.length} commandes ont été chargés.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });
  const evtFiles = await readdir("./events/");
  console.log(`${evtFiles.length} events ont été chargés.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    console.log(`Chargement de l'évènement: ${eventName}`);
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  });
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }
  client.login(client.config.token);
};

init();
