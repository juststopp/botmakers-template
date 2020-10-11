# Introduction

Hey ! Je suppose que si tu es là, c'est que tu as entendu parlé de ce fameux module ``npm`` nommé ``botmakers-template``. Alors, tu vas surement te demander, **Mais à quoi il sert ?**

# Principe du npm

Ce npm à pour but d'aider les personnes ne sachant pas coder, à faire un bot discord, en javascript, tout simplement. Ensuite, en regardant le code, ces personnes pourront comprendre comment faire, pour ensuite rajouter des commandes ! Maintenant, tu vas me demander, **Comment le configurer ?**

# Configuration

## Installation du npm

Comme pour tout npm, pour qu'il fonctionne il faut d'abord l'installer. Pour ça, rendez vous dans un inviter de commande, dans le dossier souhaité, et entrez cette commande :

```npm [install/i] <--s/--save> botmakers-template```

Dans cette commande, ce qui est entre ``[]`` est obligatoire. Pour le premier, vous avez le choix entre ``install`` et ``i``. Vous pouvez utiliser celui que vous voulez. Par contre, ce qui est entre ``<>`` n'est pas obligatoire.
## Setup du bot

Maintenant que le npm est installé et fonctionnel, nous allons pouvoir commencer le setup. Tout d'abord, rendez vous sur [le portail des développeurs](https://discord.com/developers/applications/me). Ici, si ce n'est pas déjà fait, créez une application, et inscrivez la en tant que bot. Ensuite, rendez vous dans vôtre dossier du bot. Normalement, un dossier ``node_modules`` devrait déjà être présent, ainsi que un fichier ``packages.json``, vous n'avez pas besoin d'y toucher. Vous allez donc créer un fichier ``index.js`` et y entrer ces deux lignes là :

```
const template = require('botmakers-template')
template.start(token, nom, couleur, votreId, préfixe)
```

Dans ces deux lignes, vous devrez remplacer tous les paramètre. Ne vous inquiétez pas je vais vous aider.

__Tout d'abord__ :

- ``token``・Vous devrez remplacer ça par le token de vôtre bot. Cliquez [ici](https://discord.com/developers/applications/me) et rendez vous sur vôtre bot. Ensuite, dans la section bot, il y aura marqué ``token``. Cliquez sur copier, et mettre le token entre guillemets, à la place de ``token``.
- ``nom``・Toujours entre guillemets, vous devrez ici entrer un nom d'utilisateur pour vôtre bot.
- ``couleur``・Ici, toujours entre guillemets, vous devrez mettre la couleur principale du bot, en Color HEX.
- ``votreId``・Vous mettrez ici vôtre identifiant.
- ``préfixe``・Ici, pour finir vous mettrez le préfixe que vous voulez que le bot ait.

__Ensuite__, vous n'aurez plus qu'a vous rendre dans un terminal de commande, arriver dans le dossier où se situe vôtre fichier ``index.js`` et faire la commande : ``node index.js``. Le module npm se chargera de vous mettre tous les fichiers nécessaires. Une fois le chargement en console terminé, vous pourrez refaire la commande précédente, et vôtre bot sera **__allumé__** !

# Conclusion

Merci à tout ceux qui utiliseront ce module, il m'aura pris plusieurs **jours** à faire. Pour ceux qui souhaiterait nous soutennir, vous pouvez faire un don [paypal](https://paypal.me/FauxPrenom), et rejoindre nôtre [serveur discord](https://discord.gg/yvrzuCV).
