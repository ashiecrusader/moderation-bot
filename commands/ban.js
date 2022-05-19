const { SlashCommandBuilder } = require('@discordjs/builders')
const noblox = require('noblox.js')
const { db } = require('../firebaseinit')
const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gameban')
        .setDescription('bans a user from the game')
        .setDefaultPermission(false)
        .addStringOption(option =>
            option.setName('username')
            .setDescription('the roblox username of the person you want to ban')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
            .setDescription('the reason for the ban')
            .setRequired(true)),
    
    async execute(interaction) {

        await interaction.deferReply();

        const opt = interaction.options.getString('username')
        const reas = interaction.options.getString('reason')


        var user_id = "2"
        try {
        user_id = await noblox.getIdFromUsername(opt)
        } catch (error) {
            const failem = new Discord.MessageEmbed()
                .setDescription('I was unable to find that user!')
                .setColor('RED')

            await interaction.editReply({embeds: [failem]})
            return;
        }


        let objec2t = {
            "moderator": `Discord:${interaction.user.username}:${interaction.user.id}`,
            "reason": `${reas}`
        }
        

        const game_ban_info = db.ref('game_bans/' + user_id).once('value')
        .then(async function(snapshot) {

            data2 = snapshot.val()

            if (data2 === null) {
                db.ref("game_bans/" + user_id).set(objec2t, function(error) {
                    if (error) {
                      // The write failed...
                      console.log("Failed with error: " + error)
                    } else {
                      // The write was successful...
                      console.log("success")
                    }
                })
    
               
                
        const usr = await noblox.getUsernameFromId(user_id)

        const emb = new Discord.MessageEmbed()
            .setDescription(`Successfully banned ${usr}:${user_id} from the game!`)
            .setColor('GREEN')

            axios.get("https://yeaz.ashieestar.repl.co/kickRequest/place_holder")

            
            await interaction.editReply({embeds: [emb]})
    
            
            } else {
                const failemb2 = new Discord.MessageEmbed()
                    .setDescription('User is already banned!')
                    .setColor('RED')
    
            await interaction.editReply({embeds: [failemb2]})
            }
    
        })

        
       

        // const Http = new XMLHttpRequest();
        // const url = "https://yeaz.ashieestar.repl.co/kickRequest/place_holder"
        // Http.open("POST", url);
        // Http.send();




    }
}