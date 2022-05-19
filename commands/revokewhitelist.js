const { SlashCommandBuilder } = require('@discordjs/builders')
const noblox = require('noblox.js')
const {db} = require('../firebaseinit')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('revoke_whitelist')
        .setDescription('revokes a user whitelist')
        .setDefaultPermission(false)
        .addStringOption(option =>
            option.setName('roblox_username')
            .setDescription('the roblox username of the person of which you are revoking a whitelist')
            .setRequired(true)),
    
    async execute(interaction) {

        await interaction.deferReply();
        
        const inputted_user = await interaction.options.getString('roblox_username')

        var user_id = 1234

        try {
            user_id = await noblox.getIdFromUsername(inputted_user)
        } catch (e) {
            await interaction.editReply('I couldn\'t find that user!')
            return;
        }

        db.ref('/whitelists/' + parseInt(user_id)).once('value').then(async function (snapshot) {

            data = snapshot.val();

            if (data === null) {
                await interaction.editReply('That user does not have a whitelist!')
            } else {
                var username = await noblox.getUsernameFromId(user_id)

                db.ref('/whitelists/' + parseInt(user_id)).remove();

                await interaction.editReply(`${username}:${user_id}'s whitelist has been successfully removed!`)

            }
        })
    }
}
