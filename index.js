const fetch = require("node-fetch");

DEFAULT_TELEGRAM_API_URL = "https://api.telegram.org/";

const bot = (token, apiUrl = DEFAULT_TELEGRAM_API_URL) => {
  const botUrl = `${apiUrl}bot${token}`;
  const methodUrl = (endpoint) => {
    return `${botUrl}/${endpoint}`;
  };

  const sendMessage = async ({ chatId, message, parse_method = undefined }) => {
    const url = methodUrl("sendMessage");
    const body = {
      chat_id: chatId,
      text: message,
      parse_mode: parse_method,
    };
    const res = await fetch(url, {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    return res;
  };

  const getUpdate = async () => {
    const url = methodUrl("getUpdates");
    return await fetch(url);
  };

  return {
    sendMessage,
    getUpdate,
  };
};

module.exports = bot;
