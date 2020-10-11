exports.run = async (client, message, args, level) => {
  const msg = await message.channel.send("Ping?");
  msg.edit(`Pong! La latence est de ${msg.createdTimestamp - message.createdTimestamp}ms. L'api a une latence de ${Math.round(client.ping)}ms`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Autre",
  description: "Donne la latence du bot.",
  usage: "ping"
};
