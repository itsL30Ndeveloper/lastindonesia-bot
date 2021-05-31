const { MessageEmbed } = require("discord.js")

module.exports = (client) => {
    const welcomechannelId = '821691096672501762' //Channel You Want to Send The Welcome Message
    const targetChannelId = `821691096832802817` //Channel For Rules

    client.on('guildMemberAdd', (member) => {
        console.log(member) // If You Want The User Info in Console Who Joined Server Then You Can Add This Line. // Optional
        const channel = member.guild.channels.cache.get(welcomechannelId)

        const embed = new MessageEmbed()
        .setTitle(`Welcome To ${member.guild.name}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Hello **${member.user.username}**, Welcome to **${member.guild.name}**. Thanks For Joining Our Server.
Please Read ${member.guild.channels.cache.get(targetChannelId).toString()}. Have a Nice Time.`)
        // You Can Add More Fields If You Want
        .setFooter(`Welcome ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor('GREEN')
    channel.send(embed)
        
    })


    const leavechannelId = '821691096672501762' //Channel You Want to Send The Leave Message

    client.on('guildMemberRemove', (member) => {
        console.log(member) // If You Want The User Info in Console Who Joined Server Then You Can Add This Line. // Optional
        const channel = member.guild.channels.cache.get(leavechannelId)

        const embed = new MessageEmbed()
        .setTitle(`Left from ${member.guild.name}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Hello <@${member.user.id}>, why left from **${member.guild.name}**? Goodbye and have a Nice Time.`)
        // You Can Add More Fields If You Want
        .setFooter(`Goodbye ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor('RED')
    channel.send(embed)
        
    })}