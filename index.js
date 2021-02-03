const Symphony = require('symphony-api-client-node');
const fs = require('fs');

Symphony.setDebugMode(true);

const botHearsSomething = (event, messages) => {
  messages.forEach((message, index) => {
    let reply_message = 'Hello ' + message.user.firstName + ', hope you are doing well!!'
    Symphony.sendMessage(message.stream.streamId, reply_message, null, Symphony.MESSAGEML_FORMAT)
  })
}

Symphony.initBot(__dirname + '/config.json')
  .then((symAuth) => {
    Symphony.getDatafeedEventsService(botHearsSomething)
    Symphony.sendMessageWithAttachment('wgRsEKnI3CHnTJB_6c7y5X___oihoBpVdA',
      'Hello',
      null,
      'mytext.png',
      'application/octet-stream',
      fs.createReadStream('/Users/elias.croze/Downloads/lenna.png'),
      Symphony.MESSAGEML_FORMAT);
  });
