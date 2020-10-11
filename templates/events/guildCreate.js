module.exports = (client, guild) => {
  console.log(`[NOUVEAU SERVEUR] Ajout du bot au serveur ${guild.name} (${guild.id}). Créateur du serveur: ${guild.owner.user.tag} (${guild.owner.user.id})`);
};
