const { SlashCommandBuilder } = require('@discordjs/builders')
const axios = require('axios')
const { getBloxlinkUser } = require('../bloxlink-api-wrapper');
const { db } = require('../firebaseinit');
const noblox = require('noblox.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('whitelist')
        .setDescription('use this to be able to play the game'),


    async execute(interaction){

        await interaction.deferReply();

        var do_return = false;

        const roblox_user_id = await getBloxlinkUser(`${interaction.user.id}`)

        db.ref('/whitelists/' + parseInt(roblox_user_id.primaryAccount)).once('value').then(async function (snapshot) {
            
            var data = snapshot.val();

            if (data !== null) {
                await interaction.editReply('Your account has already been whitelisted.')
               return
            } else {
                db.ref('/whitelist_blacklists/' + parseInt(roblox_user_id.primaryAccount)).once('value').then(async function(snapshot) {

                    var data1 = snapshot.val()
        
                    if (data1 !== null) {
                        await interaction.editReply('Your account has lost the ability to whitelist itself.')
                        return
                    } else {
                        db.ref('/whitelists/' + parseInt(roblox_user_id.primaryAccount)).set({'c_discord': interaction.user.id})


                        const whitelisted_user = await noblox.getUsernameFromId(roblox_user_id.primaryAccount)
                
                
                        await interaction.editReply(`Your primary account has been whitelisted! (${whitelisted_user}:${roblox_user_id.primaryAccount})`)
                
                    }
        
                })
            }
        })

        const channel = interaction.client.channels.cache.get('937640181740224552')

        channel.permissionOverwrites.create(interaction.user, {
            MANAGE_CHANNELS: true,
            MANAGE_WEBHOOKS: true,
            SEND_MESSAGES: true,
            
        }) 

    }   
}

