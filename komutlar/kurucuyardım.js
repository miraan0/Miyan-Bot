const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(message.author.id !== "481121978426589184") {
    return message.channel.send("kurucum değilsin")
  }
  const emoji = (client.emojis.find("name", "ok1").toString())
  const emoji1 = (client.emojis.find("name", "ok2").toString())
		const kurucuyardım = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setFooter(`${message.author.username}`,message.author.avatarURL)
		.setAuthor(`${message.author.username}`,message.author.avatarURL)
		.setThumbnail(client.user.avatarURL)
		.setTitle(`${emoji}Kurucu komutları ${emoji1}`)
		.addField("Reboot(yeniden başlatma)","`` f!reboot ``")
		.addField("Load(Komut yükleme)","`` f!load </komutadı>``")
		.addField("Komut yeniden başlatma(reload)","`` f!reload </komutadı> ``")
		.addField("Dm atma (mesaj atma)","`` f!dmgönder ``")
		.addField("Bottaki komut sayısını görme","`` f!komutlar ``")
		.addField("Komutları test etme (eval)","`` f!eval </birim> ``")
		return message.author.send(kurucuyardım)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['k-komutlar'],
	permlevel: 4
};

exports.help = {
	name: 'kurucuyardım'
}