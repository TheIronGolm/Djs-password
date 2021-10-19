const { MessageEmbed } = require('discord.js')

function genPassword(message, length) {
  const random = (length = 8) => {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_/-@~';
  
    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  }
  message.channel.send({ embeds: [
    new MessageEmbed()
      .setTitle("🔒 New Password")
      .setDescription(random(length))
      .setColor("#2f3136")
  ]});
}

function savePassword() {

}

module.exports = { genPassword };

// generatePassword help from https://attacomsian.com/blog/javascript-generate-random-string