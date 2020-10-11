module.exports = async (client, message) => {
  if (message.author.bot) return;

  const settings = message.settings = client.getSettings(message.guild.id);

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`Mon préfixe sur ce serveur est \`${settings.prefix}\``);
  }

  if (message.content.indexOf(settings.prefix) !== 0) return;

  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.guild && !message.member) await message.guild.fetchMember(message.author);

  const level = client.permlevel(message);

  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  if (!cmd) return;

  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("Cette commande est indisponnible en messages privés.");

  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (settings.systemNotice === "true") {
      return message.channel.send(`Vous n'avez pas la permission de faire cette commande.
  Vôtre niveau de permission est ${level} (${client.config.permLevels.find(l => l.level === level).name})
  Cette commande à besoin du niveau ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
    } else {
      return;
    }
  }

  message.author.permLevel = level;
  
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }
  console.log(`[CMD] ${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) à fait la commande ${cmd.help.name}`);
  cmd.run(client, message, args, level);
};
