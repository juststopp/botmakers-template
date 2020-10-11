exports.run = async (client, message, args, level) => {
  if (!args || args.length < 1) return message.reply("Veuillez entrer la commande que vous voulez recharger.");

  let response = await client.unloadCommand(args[0]);
  if (response) return message.reply(`Erreur de déchargement: ${response}`);

  response = client.loadCommand(args[0]);
  if (response) return message.reply(`Erreur de chargement: ${response}`);

  message.reply(`La commande \`${args[0]}\` a été rechargée`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reload",
  category: "Système",
  description: "Recharge la commande voulu pour y apporter les dernières modifications.",
  usage: "reload [command]"
};
