#!/usr/bin/env node
const init = async function () {
const modulee = require('../index.js')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
let config = {}
  readline.question(`Bienvenue sur le setup de vôtre bot discord.\n\nQuel est vôtre identifiant ? (Le vôtre)\n`, (input) => {
    config.owner = input;

  readline.question(`Comment voulez vous appeler vôtre bot ?\n`, (input) => {
    config.name = input;
    
  readline.question(`Vuel est le token de vôtre bot ? (Obtennable sur https://discord.com/developers/applications/me\n`, (input) => {
    config.token = input;
    
  readline.question(`Que voulez vous comme couleur principale ? (En Color HEX, blanc: #FFFFFF etc...)\n`, (input) => {
    config.color = input;

  readline.question(`Quel prefix voulez vous avoir ?\n`, (input) => {
    config.prefix = input;
    modulee.start(config.token,config.name,config.color,config.owner,config.prefix);
    readline.close();
        })
      })
    })
  })
})
}
init();