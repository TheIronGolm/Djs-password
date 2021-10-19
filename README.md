# Djs-Password 

[![NPM][npm-icon]][npm-url]

[![js-standard-style][standard-image]][standard-url]

[npm-icon]: https://nodei.co/npm/djs-password.svg?downloads=true
[npm-url]: https://npmjs.org/package/djs-password
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/

&nbsp;

# Installation
```
npm i djs-password
```

&nbsp;

# Setup
```fs
//require the djs-password module
const password = require('djs-password');

//call the password generator
password.genPassword(message, <Number>)
```

# Example (djs v13)

```js
const discord = require('discord.js');
const password = require('djs-password');

const client = new discord.Client({
  intents: 32767,
});

let prefix = '!';
let token = 'bot token goes here!';

client.on('ready', () => {
	console.log(`${client.user.tag} is ready!`);
});

client.on('messageCreate', async(message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) 
    return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  if(command === 'password') {
    try {
    if(args[0] > 256)
      return message.channel.send({ content: "Max limit hit" });
    password.genPassword(message, args[0]);
    } catch (e) {
      message.channel.send(e)
    }
  } else if(command === 'ping') {
    message.channel.send({ content: `${client.ws.ping}ms!` })
  }

})

client.login(token)
```

If you have any questions, be welcome to message me on Discord.
> The_Iron_Golm#5615






