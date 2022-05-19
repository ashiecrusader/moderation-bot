const { SlashCommandBuilder } = require('@discordjs/builders')
const { db } = require('../firebaseinit')
const noblox = require('noblox.js')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unban')
        .setDescription('unbans a user from the game')
        .setDefaultPermission(false)
        .addStringOption(option =>
            option.setName('username')
            .setDescription('the username of the person you want to unban')
            .setRequired(true)),
        
    async execute(interaction) {
    
        await interaction.deferReply();

        const opt = interaction.options.getString('username')

        var user_id = "1"
        var user_name = "John Doe"

        try {
            user_id = await noblox.getIdFromUsername(opt)
            user_name = await noblox.getUsernameFromId(user_id)

        } catch (e) {
            const failem = new Discord.MessageEmbed()
                .setDescription('I was unable to find that user!')
                .setColor('RED')

            await interaction.editReply({embeds: [failem]})
            return;
        }

        db.ref('game_bans/' + user_id).once('value').then(async function(snapshot) {
            const data = snapshot.val();

            if (data === null) {
                const failem2 = new Discord.MessageEmbed()
                    .setDescription('That user is not banned!')
                    .setColor('RED')

                await interaction.editReply({embeds: [failem2]})
            } else {
                db.ref('game_bans/' + user_id).remove()

                const sucemb = new Discord.MessageEmbed()
                    .setDescription(`${user_name}:${user_id} has been unbanned from the game!`)
                    .setColor('GREEN')

                await interaction.editReply({embeds: [sucemb]})
            }
        })

    }
}