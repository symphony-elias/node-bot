const Symphony = require('symphony-api-client-node');
const fs = require('fs');

Symphony.setDebugMode(true);

Symphony.initBotFromObjects({
  sessionAuthHost: "devx3.symphony.com",
  sessionAuthPort: 443,
  keyAuthHost: "devx3.symphony.com",
  keyAuthPort: 443,
  podHost: "devx3.symphony.com",
  podPort: 443,
  agentHost: "devx3.symphony.com",
  agentPort: 443,
  authType: "rsa",
  botPrivateKeyPath: "rsa/",
  botPrivateKeyName: "fbbot_privatekey.pkcs8",
  botUsername: "postman-ecroze",
  botEmailAddress: "fake@symphony.com",
  authTokenRefreshPeriod: "30"
})
  .then((symAuth) => {
    Symphony.sendMessage('wgRsEKnI3CHnTJB_6c7y5X___oihoBpVdA',
      'Hello',
      null,
      Symphony.MESSAGEML_FORMAT);
  });
