const fs = require('file-system');
const ncp = require('ncp');
module.exports.start = async function start(token, name, owner, prefix, f) {
    if(!token) throw new TypeError('Vous devez tout d\'abord mettre le token du bot.');
    if(!name) throw new TypeError('Veuillez entrer le nom du bot en deuxième paramètre.');
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
      "repository": "juststopp/botmakers-template",
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
        "defaultSettings" : {
            "prefix": "${prefix}",
        }
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
   await exec(`npm i --save ms fs discord-giveaways discord.js moment-duration-format moment`, async(error, stdout) => {
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
