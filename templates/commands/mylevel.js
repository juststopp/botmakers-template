exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  message.reply(`Vôtre permission sur le bot est: ${level} - ${friendly}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "mylevel",
  category: "Autre",
  description: "Vous donne vôtre permission sur le bot.",
  usage: "mylevel"
};
