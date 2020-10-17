module.exports.run = (client, message, args) => {
  let texte = '__Voici mes commandes__ :'
  client.commands.forEach(c => {
    texte = texte + `\n\`${c.help.name}\`・${c.help.description} **Usage**: ${c.help.usage}`
  })
  message.channel.send(texte)
};

exports.help = {
  name: "help",
  description: "Donne la liste de toutes les commandes auxquelles vous avez accès.",
  usage: "help [command]"
};
