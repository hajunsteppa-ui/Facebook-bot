module.exports.config = {
  name: "aiku god",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "aiku dummylandia",
  description: "War in group",
  commandCategory: "group",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  const messages = [
    "Reminder 1",
    "Reminder 2",
    "Reminder 3"
  ];

  let index = 0;

  api.sendMessage("Reminder scheduler started.", event.threadID);

  const interval = setInterval(() => {
    api.sendMessage(
      { body: messages[index] },
      event.threadID
    );

    index++;

    if (index >= messages.length) {
      clearInterval(interval); // stop after all messages are sent
    }
  }, 5000);
};
