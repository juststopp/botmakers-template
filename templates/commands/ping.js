module.exports.run = async (client, message, args, level) => {
  const msg = await message.channel.send("Ping?");
  msg.edit(`Pong! La latence est de ${msg.createdTimestamp - message.createdTimestamp}ms. L'api a une latence de ${Math.round(client.ping)}ms`);
};

module.exports.help = {
  name: "ping",
  description: "Donne la latence du bot.",
  usage: "ping"
};
