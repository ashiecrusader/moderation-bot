const { SlashCommandBuilder } = require('@discordjs/builders')
const { db } = require('../firebaseinit')
const Discord = require('discord.js')
const noblox = require('noblox.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('getban')
        .setDescription('gets a user ban')
        .setDefaultPermission(false)
        .addStringOption(option =>
            option.setName('username')
            .setDescription('the username of the person you want to get the ban of')
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
            const failem1 = new Discord.MessageEmbed()
                .setDescription('I was unable to find that user!')
                .setColor('RED')
            await interaction.editReply({embeds: [failem1]})
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
                const sucembed = new Discord.MessageEmbed()
                    .setTitle(`Ban record found for ${user_name}`)
                    .addFields(
                        { name: 'Reason', value: `${data.reason}`},
                        { name: 'Moderator', value: `${data.moderator}`}
                    )
                    .setTimestamp()
                    .setColor('GREEN')

                await interaction.editReply({embeds: [sucembed]})
            }
        })
    }
}