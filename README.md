# moderation-bot
A project I have started working on at the end of 2021, it's purpose was to serve as a moderation bot that would exchange information between roblox and discord.

It's quite simple since essenstialy all it does is write and read data to a database.

``/ban`` - command used for adding user IDs to a database collection labeled as game_bans, the game on roblox had a script that verified every user that joined the server, and kicked them if they were blacklisted.

``/whitelist`` - the game had a whitelist system, which required all the users to be in the discord in order to play the game. This command grabbed (or atleast attempted to grab) the user id of a roblox acccount that's connected with a discord account from the bloxlink API using the ``getBloxlinkUser()`` function which returned an object with a ``primaryAccount`` key that contained the ID of a roblox account. Very easy to bypass, which is why it was scrapped.

There are other commands that don't need explaining, since they do exactly the same thing as the above ones.
