const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('FalconBot» Bip Bop Bip Bop Bop... Davet Kodumu özelden Attım. Kontrol Et :postbox:');
    message.channel.send(ozelmesajkontrol) 
  }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription( 'Davet » Kanka Eklediğin İçin Teşekkürler :heart: \n\n [Bot davet linki](https://discordapp.com/oauth2/authorize?client_id=625732994434334721&scope=bot&permissions=2081615103)  ');
    return message.author.sendEmbed(pingozel)
console.log(`Davet komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
