module.exports = async client => {

  console.log(`${client.user.tag}, prêt à servir ${client.users.size} utilisateurs sur ${client.guilds.size} serveurs.`, "ready");

  client.user.setActivity(`${client.config.defaultSettings.prefix}help | Fait par le template de JustStop__#2020`, {type: "STREAMING"});
};
