const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '[token]';
const prompt require('prompt-sync')();

bot.on('ready', () =>{
    console.log('Online');
    bot.user.setActivity('Something Very Poggers',{type='WATCHING'});
})
bot.on('message', msg=>{
    if(msg.content === "poggers"){
        message.channel.send(':smiling_face_with_3_hearts: :heart_eyes: :kissing_heart: :partying_face: :kissing_heart: :heart_eyes: :smiling_face_with_3_hearts: Thats SUPER Poggers :smiling_face_with_3_hearts: :heart_eyes: :kissing_heart: :partying_face: :kissing_heart: :heart_eyes: :smiling_face_with_3_hearts:');
        console.log('Poggers Message Sent');
        sentMessage.react('😍');
});
    }
})
bot.on('message', message=>{
    if(message.content === "p! commands"){
const commandsEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Commands')
.setDescription('List of all the commands.')
.addFields(
    { name: 'p! add', value: 'Add Poggers Bot To Your Server.'},
    { name: 'p! github', value: 'Displays the link to my github page.'},
    { name: 'p! commands', value: 'Displays all commands'},
    { name: 'p! update', value: 'Displays update additions'},
    { name: 'p! unstable', value: 'Unstable Commands.'},
)
message.channel.send(commandsEmbed)
    console.log('Commands Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "p! update"){
const updateCommandsEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Release 2 Updates | Commands')
.setDescription('1 New commands were added this update along with general bug fixes and optimizations.')
.addFields(
    { name: 'p! unstable', value: 'Unstable Commands.'},
)
message.channel.send(updateCommandsEmbed)
    }
})
const updateFunctionsEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Release 2 Updates | Functions')
.setDescription('1 New Functionality Was Added With This Update.')
.addFields(
    { name: 'Welcome', value: 'When a new user joins the server the bot will send a welcome message to the reception channel. If you do not have a reception channel the function will fail.'},
)
message.channel.send(updateFunctionsEmbed)
    console.log('Update Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "p! cmd"){
    const prompt = require('prompt-sync')();

    const messageOut = prompt('Say Something: ');
  console.log('Message Received');
  console.log(messageOut);
  message.channel.send(messageOut);
  console.log('Message Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "p! github"){
const githubEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Nikita-Khrushchev On Github')
.setURL('https://github.com/Nikita-Khrushchev')
.setImage('https://avatars0.githubusercontent.com/u/63527367?s=460&u=639462cb6081e5b324d04e60f6ecb1d431bb264c&v=4')
message.channel.send(githubEmbed)
    console.log('Github Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "p! outage"){
const outageEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Poggers Bot Will Be Offline For A Few Mins.')
message.channel.send(outageEmbed)
    console.log('Outage Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "p! add"){
const addEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Add Poggers Bot To Your Server!')
.setURL('https://github.com/Nikita-Khrushchev')
message.channel.send(addEmbed)
    console.log('Add Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "p! online"){
const onlineEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Poggers Bot Is Now Back Online')
message.channel.send(onlineEmbed)
        console.log('Online Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "p! status"){
const statusEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Bot Status')
.addField('Status', message.author.presence.status)
message.channel.send(statusEmbed)
        console.log('Status Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "p! unstable"){
const unstableEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Unstable Commands.')
.setDescription('These commands are unfinished and should not be used.')
.addFields(
    { name: 'p! status', value: 'Displays the status of the user that sent the command.'},
)
message.channel.send(unstableEmbed)
    console.log('Unstable Commands Embed Sent');
    }
});
bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "reception");
    if(!channel) return;
    channel.send('Welcome To The Server, read the rules or die.') //can change
});
bot.login(token);
