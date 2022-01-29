const {Client} = require ('discord.js') //defining stuff 
const client = new Client()
client.on('ready', () => { //shows that whether your bot is online or not
		console.log(`
◊═══════════════════════════◊
${client.user.username} is now online.
Name : ${client.user.tag}
Channels : ${client.channels.cache.size}
◊═══════════════════════════◊
`)
});
client.on("message", async message => { //if you are using djsV13 then change "message" to "messageCreate"
  
         const { MessageEmbed } = require ('discord.js') //sending the message in embed form
         if(message.guild.ownerID || message.member.hasPermission("MANAGE_MESSAGES") || message.author.bot) return; //People who can bypass
         if(message.content.includes("https://") || message.content.includes("http://") || message.content.includes("discord.gg/")) { 
         message.delete()//backlisting links and deleting it
         message.channel.send( //warning the user in embed form because why not? embed looks cool lol
          new MessageEmbed()
          .setTitle(`Link detected`) //this is your title
          .setDescription(`${message.author}, Links are not allowed in this server.`) //this is your description
          .setFooter('Powered by NeoBot') //Yeah it's a footer
          .setColor('#00298c') //You can use 'RANDOM' to chsnge colors if you want
    }
})
client.login('paste your token')//i recommend you to use .env to keep your token safe!
