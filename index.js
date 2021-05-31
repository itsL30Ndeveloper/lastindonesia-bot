const Discord = require('discord.js');
const client = new Discord.Client();

client.queue = new Discord.Collection()

const { token } = require('./config.json')
const welcome = require('./commands/Mod/welcome');
const loadCommands = require('./commands/load-commands');
const suggest = require('./commands/Fun/suggest');
const memberCount = require('./commands/Mod/member-count');
const EditMessage = require('./utils/EditMessage');
const setup = require('./commands/Reaction-Roles/setup');
const reactRoles = require('./commands/Reaction-Roles/react-roles');
const cahtbot = require('./commands/Fun/chatbot');
const lb = require('./commands/Economy/lb');
const uptime = require('./commands/Info/uptime');
const botInfo = require('./commands/Info/bot-info');
const createcommon = require('./commands/Ticket/Reaction/create-common')
const createcoding = require('./commands/Ticket/Reaction/create-coding')
const creategiveaway = require('./commands/Ticket/Reaction/create-giveaway');
const botJoinLeaveLogs = require('./commands/Per-Server-Commands/Other/bot-join-leave-logs');
const joinMessage = require('./commands/Per-Server-Commands/Other/join-message');
const start = require('./commands/GiveAways/start'); // Add This
const edit = require('./commands/GiveAways/edit'); // Add This
const end = require('./commands/GiveAways/end'); // Add This
const reRoll = require('./commands/GiveAways/re-roll'); // Add This
const _delete = require('./commands/GiveAways/delete'); // Add This


client.once('ready', () => {
    console.log('Ready.')
    
    setInterval(() => {
        const statuses = [
            `LAST INDONESIA | #WEARECOMMUNITY`,
            `AmriRifaldy#9562`,
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 2000) // Second You Want to Change Status, This Cahnges Every 2 Seconds

    welcome(client)
    loadCommands(client)
    suggest(client)
    memberCount(client)
    EditMessage(client)
    setup(client)
    reactRoles(client)
    cahtbot(client)
    lb(client)
    uptime(client)
    botInfo(client)
    createcommon(client)
    createcoding(client)
    creategiveaway(client)
    botJoinLeaveLogs(client)
    joinMessage(client)
    start(client) // Add This
    edit(client) // Add This
    end(client) // Add This
    reRoll(client) // Add This
    _delete(client) // Add This
})

client.on('voiceStateUpdate', (old, New) => {
    if(old.id !== client.user.id) return
    if(old.channelID && !New.channelID) client.queue.delete(old.guild.id)
})

client.login(token)