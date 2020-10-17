const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (client, message, args) => {
    
    let hasPerm = message.member.hasPermission('MANAGE_MESSAGES');
    let hasRole = message.member.roles.cache.find(r => r.name === 'Giveaways');

        if(hasPerm === false || !hasRole == null) {
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__ERREUR__')
                    .setColor('RED')
                    .setDescription('Il vous faut la permission `MANAGE_MESSAGES` ou un rôle nommé `giveaways` pour faire cette commande.')
                    .setTimestamp()
            )
        }

        if(!args[0]){
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__ERREUR__')
                    .setColor('RED')
                    .setDescription('Veuillez entrer la durée du giveway.\n\n__Exemple__ : `[prefix]gstart 1m`')
                    .setTimestamp()
            )
        }

        if(!args[1]){
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__ERREUR__')
                    .setColor('RED')
                    .setDescription('Veuillez entrer le nombre de gagnant.\n\n__Exemple__ : `[prefix]gstart 1m 1`')
                    .setTimestamp()
            )
        }

        if(!args[2]){
            return message.channel.send(
                new Discord.MessageEmbed()
                    .setTitle('__ERREUR__')
                    .setColor('RED')
                    .setDescription('Veuillez entrer le lot à gagner.\n\n__Exemple__ : `[prefix]gstart 1m 1 Nitro Classique`')
                    .setTimestamp()
            )
        }

        message.delete();

        client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(" "),
            winnerCount: parseInt(args[1]),
            messages: {
                giveaway: "🎉 **GIVEAWAY** 🎉",
                giveawayEnded: "🎉 **GIVEAWAY TERMINE** 🎉",
                timeRemaining: `\n\`⏲️\`・Temps restant: **{duration}**!\n\`👑\`・Host par: ${message.author}\n\`🏆\`・Gagnant(s): ${parseInt(args[1])}`,
                inviteToParticipate: "Réagis avec 🎁 pour participer!",
                winMessage: "\`🎉\`・Bien joué, {winners}! Vous gagnez **{prize}**!",
                embedFooter: "Giveaways",
                noWinner: `\`⛔\`・Le giveaway à été annulé car il n'y a aucune participation correcte.\n\`👑\`・Host par: ${message.author}`,
                winners: `\`🏆\`・Gagnant(s)`,
                endedAt: "Fin le",
                units: {
                    seconds: "secondes",
                    minutes: "minutes",
                    hours: "heures",
                    days: "jours",
                    pluralS: false
                }
            }
        });


        client.giveawaysManager.on('giveawayRerolled', (giveaway, winners) => {
            winners.forEach((member) => {
                member.send('**Reroll:** Bien joué, '+member.user.username+', vous gagnez: '+giveaway.prize);
            });
        });

        return;
    
}

module.exports.help = {
  name: "gstart",
  description: 'Démare un giveaway',
  usage: 'gstart [durée s/m/h/d] [nombreDeGagnants] [lot]'
}