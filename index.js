const fs = require('file-system');
const ncp = require('ncp');
module.exports.start = async function start(token, name, color, owner, prefix, f) {
    if(!token) throw new TypeError('Vous devez tout mettre le token du bot.');
    if(!name) throw new TypeError('Veuillez entrer le nom du bot en deuxième paramètre.');
    if(!color || !color.startsWith('#')) throw new TypeError('En troisième paramètre, nous demandons une couleur, qui doit être en Color HEX. Exemple: #FFFFFF pour le blanc.');
    if(!owner || !parseInt(owner)) throw new TypeError('Veuillez entrer vôtre identifiant.');
    if(!prefix) throw new TypeError('Pour finir, veuillez mettre le prefix du bot.');

const { LogFrame, CompositeLogView, RawLogView } = require('log-frame');
const { ProgressBar } = require('logf-progress');
 
const root = new CompositeLogView();
 
const frame = new LogFrame();
frame.view = root;
 
const bar = new ProgressBar();
const label = new RawLogView();
root.addChild(bar);
root.addChild(label);
 
label.content = ' - Télérchargement';
 
let progress = 0;
    var pack = `
    {
      "name": "${name}",
      "version": "1.0.0",
      "description": "DiscordJSBot",
      "license": "MIT",
      "repository": "MayorChano/discordjs-template",
      "main": "index.js",
      "scripts": {
        "start": "node index.js"
      },
      "engines": {
        "node": "${process.version.toString().slice(1)}"
      },
      "dependencies": {
      }
    }
    `;
    var json = `
const config = {
        "ownerID": "${owner}",
        "admins": [],
        "support": [],
        "token": "${token}",
        "colour": "0x${color.slice(1)}",
        "defaultSettings" : {
            "prefix": "${prefix}",
            },
            permLevels: [
            {   level: 0,
                name: "User", 
                check: () => true
            },
            {   level: 2,
                name: "Moderator",
                check: (message) => {
                  try {
                    return (message.member.hasPermission("MANAGE_MESSAGES"));
                  } catch (e) {
                    return false;
                  }
                }
            },
          
            {   level: 3,
                name: "Administrator", 
                check: (message) => {
                  try {
                    return (message.member.hasPermission("ADMINISTRATOR"));
                  } catch (e) {
                    return false;
                  }
                }
            },
            {    level: 4,
                name: "Server Owner",
                check: (message) => message.channel.type === "text" ? (message.guild.ownerID === message.author.id ? true : false) : false
            },
            {    level: 8,
                name: "Bot Support",
                check: (message) => config.support.includes(message.author.id)
            },
          
            {   level: 9,
                name: "Bot Admin",
                check: (message) => config.admins.includes(message.author.id)
            },
            {   level: 10,
                name: "Bot Owner", 
                check: (message) => message.client.config.ownerID === message.author.id
            }
        ]
    };
module.exports = config;`;
if(f) {
    await fs.writeFile("../config.js", json, function (err) {
        if (err) throw err;
    });
} else {
    await fs.writeFile("config.js", json, function (err) {
        if (err) throw err;
    });
}
progress += 0.10;
bar.progress = progress;
if(f) {
  await fs.writeFile("../package.json", pack, function (err) {
      if (err) throw err;
  });
} else {
  await fs.writeFile("package.json", pack, function (err) {
      if (err) throw err;
  });
}
progress += 0.10;
bar.progress = progress;
await ncp(__dirname + '/templates/commands/', 'commands/', function (err) {
    if (err) {
      throw new Error(err);
    }
   });
progress += 0.10;
bar.progress = progress;
await ncp(__dirname + '/templates/modules/', 'modules/', function (err) {
    if (err) {
      throw new Error(err);
    }
   });
   progress += 0.10;
   bar.progress = progress;
   await ncp(__dirname + '/templates/events/', 'events/', function (err) {
    if (err) {
      throw new Error(err);
    }
   });
   progress += 0.10;
   bar.progress = progress;
   await ncp(__dirname + '/templates/index.js', 'index.js', function (err) {
    if (err) {
      throw new Error(err);
    }
   });
   progress += 0.05;
   bar.progress = progress;
   const exec = require("child_process").exec;
   console.log('Téléchargement des packages npm nécessaires.')
   await exec(`npm i --save better-sqlite-pool chalk discord.js enmap express file-system moment moment-duration-format request`, async(error, stdout) => {
       if(stdout) {
        progress = 1;
        label.content = ' - Terminé!'
        bar.progress = progress;
       }
       if(error) {
       console.log(error)
       }
   })
};
