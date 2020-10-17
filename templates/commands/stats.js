const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = (client, message, args, level) => {
  const duration = moment.duration(client.uptime).format(" D [jours], H [heures], m [minutes], s [secondes]");
  message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('STATISIQUES')
        .setColor('#2f3136')
        .addField('• Usage RAM', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
        .addField('• Durée en ligne', `${duration}`)
        .addField('• Utilisateurs', client.users.cache.size)
        .addField('• Serveurs', client.guilds.cache.size)
        .addField('• Salons', client.channels.cache.size)
        .addField('• Discord.js', `v${Discord.version}`)
        .addField('• Template', `[Utiliser le template](https://npmjs.org/package/botmakers-template)`)
        .addField('• Node', process.version)
  )
};

module.exports.help = {
  name: "stats",
  description: "Donne les statistiques du bot.",
  usage: "stats"
};
