exports.run = async (client, message, args, level) => {
  await message.reply("Extinction du bot...");
  client.commands.cache.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reboot",
  category: "Système",
  description: "Permet d'éteindre le bot.",
  usage: "reboot"
};
