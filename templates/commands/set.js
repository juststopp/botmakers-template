exports.run = async (client, message, [action, key, ...value], level) => {

  const settings = message.settings;
  const defaults = client.config.defaultSettings;
  const overrides = client.settings.get(message.guild.id);
  if (!client.settings.has(message.guild.id)) client.settings.set(message.guild.id, {});
  
  if (action === "edit") {
    if (!key) return message.reply("Veuillez entrer une valeur à modifier.");
    if (!defaults[key]) return message.reply("Cette valeur n'existe pas.");
    const joinedValue = value.join(" ");
    if (joinedValue.length < 1) return message.reply("Veuillez entrer une nouvelle valeur.");
    if (joinedValue === settings[key]) return message.reply("Ce paramètre à déjà cette valeur.");
    
    if (!client.settings.has(message.guild.id)) client.settings.set(message.guild.id, {});

    client.settings.set(message.guild.id, joinedValue, key);

    message.reply(`${key} a désormais pour valeur: ${joinedValue}`);
  } else
  
  if (action === "del" || action === "reset") {
    if (!key) return message.reply("Veuillez entrer une valuer à reset.");
    if (!defaults[key]) return message.reply("Cette valeur n'existe pas.");
    if (!overrides[key]) return message.reply("Cette valeur est déjà par défaut.");
    

    const response = await client.awaitReply(message, `êtes vous sur de vouloir reset ${key} à sa valeur par défaut ?`);

    if (["y", "yes"].includes(response.toLowerCase())) {
      client.settings.delete(message.guild.id, key);
      message.reply(`${key} à été reste avec succès.`);
    } else
    if (["n","no","cancel"].includes(response)) {
      message.reply(`Vos paramètres pour \`${key}\` ont été remis à \`${settings[key]}\``);
    }
  } else
  
  if (action === "get") {
    if (!key) return message.reply("Veuillez spécifier une valeur à voir.");
    if (!defaults[key]) return message.reply("Cette valeur n'existe pas.");
    const isDefault = !overrides[key] ? "\nC'est la valeur par défaut." : "";
    message.reply(`La valeur de ${key} est actuellement ${settings[key]}${isDefault}`);
  } else {
    const array = [];
    Object.entries(settings).forEach(([key, value]) => {
      array.push(`${key}${" ".repeat(20 - key.length)}::  ${value}`); 
    });
    await message.channel.send(`= Paramètres actuels =\n${array.join("\n")}`, {code: "asciidoc"});
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["setting", "settings", "conf"],
  permLevel: "Administrator"
};

exports.help = {
  name: "set",
  category: "Système",
  description: "Permet de voir ou de modifier les paramètre du serveur.",
  usage: "set <view/get/edit> <key> <value>"
};
