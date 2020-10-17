const Discord = require('discord.js');
const fs = require('fs');

module.exports = (client, message) => {
    if (message.channel.type === 'dm') return;
    if(message.author.bot) { return; }
    let prefix = client.config.defaultSettings.prefix
    if (!message.content.startsWith(prefix)) { return; }

        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let commande = args.shift();
        let cmd = client.commands.get(commande);

        if (!cmd) { return; }
            cmd.run(client, message, args);
            let date = new Date();
            console.log(`${message.author.username} | ${date} | Commande : ${prefix}${commande} ${args.join(' ')}`)
};