const TG = require('telegram-bot-api')
const api = new TG({
  token: '1546515832:AAGEQvAAFBu3_abo9G-jqC4d018_6VJsT9s'
})

exports.handler = async (event, context, callback) => {
  try {
    const data = JSON.parse(event.body)
    const message = data.message || "MESSAGE";
    const recipients = ['410444568']
    console.log(data)

    recipients.forEach(function(el, index) {
      api.sendMessage({
        chat_id: el,
        text: `She said yes \nMessage: ${message}`
      })
    })
    callback(null);
  } catch (err) {
    callback(err);
  }
};