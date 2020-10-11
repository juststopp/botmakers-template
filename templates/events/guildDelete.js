module.exports = (client, guild) => {
  console.log(`[SERVEUR QUITTE] Le serveur ${guild.name} (${guild.id}) à enlevé le bot.`);
  if (client.settings.has(guild.id)) {
    client.settings.delete(guild.id);
  }
};
