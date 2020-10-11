module.exports = async (client, error) => {
  console.error(`Une erreur à été reçu de Discord.js: \n${JSON.stringify(error)}`, "error");
};
