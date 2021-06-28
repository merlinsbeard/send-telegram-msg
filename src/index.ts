import fetch from "node-fetch";

const DEFAULT_TELEGRAM_API_URL = "https://api.telegram.org/";

export interface SendMessage {
  chatId: string;
  message: string;
  parseMethod?: string;
}

function bot(token: string, apiUrl = DEFAULT_TELEGRAM_API_URL) {
  const botUrl = `${apiUrl}bot${token}`;
  const methodUrl = (endpoint: string) => {
    return `${botUrl}/${endpoint}`;
  };

  const sendMessage = async ({ chatId, message, parseMethod }: SendMessage) => {
    const url = methodUrl("sendMessage");
    const body = {
      chat_id: chatId,
      text: message,
      parse_mode: parseMethod,
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
}

export default bot;
