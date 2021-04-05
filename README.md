# Usage

requires telegram user token and channelId

Token can be created here [https://core.telegram.org/bots#6-botfather](https://core.telegram.org/bots#6-botfather)

```javascript
import { bot } from 'send-telegram-msg';

const token = "<Telegram Token>"
const botSample = bot(token)

botSample.sendMessage({
  chatId: "<Chat Id to send>",
  message: "hello",
});
```
