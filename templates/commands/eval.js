const { Discord, discord } = require('discord.js')

module.exports.run = async (client, message, args, level) => {
  if(!args[0]) return message.channel.send('Veuillez entrer une ligne javascript')
  const code = args.join(" ");
  try {
    const evaled = eval(code);
    message.channel.send(`\`\`\`js\n${evaled}\n\`\`\``);
  } catch (err) {
    message.channel.send(`\`ERREUR\` \`\`\`xl\n${err}\n\`\`\``);
  }
};

module.exports.help = {
  name: "eval",
  description: "Permet de tester un code javascript.",
  usage: "eval [...code]"
};
