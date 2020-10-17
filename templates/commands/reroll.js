const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    let hasPerm = message.member.hasPermission('MANAGE_MESSAGES');
    let hasRole = message.member.roles.cache.find(r => r.name === 'Giveaways');

      if(hasPerm === false || !hasRole == null) return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle('__ERREUR__')
          .setColor('RED')
          .setDescrtiption('Il vous faut la permission `MANAGE_MESSAGES` ou un rôle nommé `giveaways` pour faire cette commande.')
          .setTimestamp()
      )

      if(!args[0]) {
        return message.channel.send(
          new Discord.MessageEmbed()
            .setTitle('__ERREUR__')
            .setColor('RED')
            .setDescription('Veuillez entrer l\'ID du giveaway.')
            .setTimestamp()
        )
      }

      client.giveawaysManager.reroll(args[0], {
        messages: {
          congrat: "\`🎁\`・Bien joué au nouveau gagnant: {winners}",
        }
      })
      
}

module.exports.help = {
  name: "reroll",
  description: 'Choisit un nouveau gagnant au giveaway demandé.',
  usage: 'reroll [giveawayID]'
}