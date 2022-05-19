// normalRuntime()
devMode()

async function normalRuntime() {
	const { Client, Collection, Intents } = require('discord.js');
	const client = new Client({ partials: ["CHANNEL"], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGES] });

	const { REST } = require('@discordjs/rest');
	const { Routes } = require('discord-api-types/v9');
	const { token } = require('./config.json');
	const fs = require('fs');

	const commands = [];
	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	const Discord = require('discord.js')

	const clientId = '801747963067236402';
	const guildId = '766418754497544212';

	client.commands = new Collection();

	client.once('ready', async () => {
		client.user.setActivity('github not work!', { type: 'WATCHING' })
		const guild = client.guilds.cache.get(guildId)
		console.log('running state instance/ no changes ')

	})

	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		commands.push(command.data.toJSON());
		client.commands.set(command.data.name, command);
	}


	const rest = new REST({ version: '9' }).setToken(token);

	(async () => {
		try {
			console.log('Started refreshing application (/) commands.');

			await rest.put(
				Routes.applicationGuildCommands(clientId, guildId),
				{ body: commands },
			);

			console.log('Successfully reloaded application (/) commands.');
		} catch (error) {
			console.error(error);
		}
	})();

	client.on('messageCreate', async (message) => {
		if(message.content.startsWith('>>function')) {
			if(message.author.id !== '704996899132014652') {
				return message.reply('You are not permitted to excute this command!')
			}
			var result = message.content.split(" ").slice(1).join(" ")

			async function getApplicationCommands(intx) {
				const guildtf = client.guilds.cache.get(intx)
				let commands = 	await guildtf.commands.fetch()
				
				let commandos = ""
			
				commands.forEach(command => {
					commandos += `${command.name}: ${command.id}\n`
				});
			
				let str = '{\nXXX}'

				let finalr = str.replace("XXX", commandos)

				const succesEmbed2 = new Discord.MessageEmbed()
				.setColor('BLURPLE')
				.addFields(
					{ name: 'Script', value: `\`\`\`js\n${result}\n\`\`\``, inline: false },
					{ name: 'Output', value: `\`\`\`js\n${finalr}\n\`\`\``, inline: false },
					{ name: 'Websocket latency', value: `\`\`\`js\n${client.ws.ping}\n\`\`\`` },
				)
				.setFooter({ text: 'Type: ApplicationCommand'})
				.setTimestamp();   

				message.reply({embeds: [succesEmbed2]})
			
						}

				await eval(result)
		}
	})

	client.on('interactionCreate', async interaction => {
		if (!interaction.isCommand()) return;

		const command = client.commands.get(interaction.commandName);

		if (!command) return;

		// if(interaction.guildId === '766418754497544212') {
		// 	await interaction.reply({ content: 'The commands are currently disabled due to the bot being in development mode, please try again later.', ephemeral: true})
		// 	return;
		// }

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	});

	client.login(token);
}

async function devMode() {
	const { Client, Collection, Intents } = require('discord.js');
	const client = new Client({ partials: ["CHANNEL"], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGES] });

	const { REST } = require('@discordjs/rest');
	const { Routes } = require('discord-api-types/v9');
	const { token } = require('./config.json');
	const fs = require('fs');

	const commands = [];
	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	const Discord = require('discord.js')

	const clientId = '801747963067236402';
	const guildId = '766418754497544212';

	client.commands = new Collection();

	client.once('ready', async () => {
		client.user.setActivity('devmode', { type: 'WATCHING' })
		const guild = client.guilds.cache.get(guildId)
		console.log('running dev instance')

	})

	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		commands.push(command.data.toJSON());
		client.commands.set(command.data.name, command);
	}


	const rest = new REST({ version: '9' }).setToken(token);

	(async () => {
		try {
			console.log('Started refreshing application (/) commands.');

			await rest.put(
				Routes.applicationGuildCommands(clientId, guildId),
				{ body: commands },
			);

			console.log('Successfully reloaded application (/) commands.');
		} catch (error) {
			console.error(error);
		}
	})();

	client.on('messageCreate', async (message) => {
		if(message.content.startsWith('>>function')) {
			if(message.author.id !== '704996899132014652') {
				return message.reply('You are not permitted to use this command!')
			}
			var result = message.content.split(" ").slice(1).join(" ")

			async function getApplicationCommands(intx) {
				const guildtf = client.guilds.cache.get(intx)
				let commands = 	await guildtf.commands.fetch()
				
				let commandos = ""
			
				commands.forEach(command => {
					commandos += `${command.name}: ${command.id}\n`
				});
			
				let str = '{\nXXX}'

				let finalr = str.replace("XXX", commandos)

				const succesEmbed2 = new Discord.MessageEmbed()
				.setColor('BLURPLE')
				.addFields(
					{ name: 'Script', value: `\`\`\`js\n${result}\n\`\`\``, inline: false },
					{ name: 'Output', value: `\`\`\`js\n${finalr}\n\`\`\``, inline: false },
					{ name: 'Websocket latency', value: `\`\`\`js\n${client.ws.ping}\n\`\`\`` },
				)
				.setFooter({ text: 'Type: ApplicationCommand'})
				.setTimestamp();   

				message.reply({embeds: [succesEmbed2]})
			
						}

				await eval(result)
		}
	})

	client.on('interactionCreate', async interaction => {
		if (!interaction.isCommand()) return;

		const command = client.commands.get(interaction.commandName);

		if (!command) return;

		if(interaction.guildId === '766418754497544212') {
			await interaction.reply({ content: 'The commands are currently disabled due to the bot being in development mode, please try again later.', ephemeral: true})
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	});

	client.login(token);
}