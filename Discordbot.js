const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});






client.on('message', msg => {
  if (msg.content === 'ت ف ك ي ك') {
    msg.reply('احسنت');
  }
});








client.on('message', msg => {
  if (msg.content === 'ل ع ب ة') {
    msg.reply('احسنت');
  }
});




client.on('message', msg => {
  if (msg.content === 'ك ل م ة') {
    msg.reply('احسنت');
  }
});


client.on('message', msg => {
  if (msg.content === 'د ي س ك و ر د') {
    msg.reply('احسنت');
  }
});






client.on('message', msg => {
  if (msg.content === '!fortnite') {
    msg.reply('لقد تم إعطائك رتبة فورتنايت');
  }
});







const prefix = '!'
client.on('message', message => {
  if (message.author.id === client.user.id) return;
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("**!bc <message>**");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(' الـسيرفر', `${message.guild.name}`,true)
          .addField(' الـمرسل ', `${message.author.username}#${message.author.discriminator}`,true)
          .addField(' الرسالة ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const AziRo = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| جاري ارسال رسالتك ')
      .addBlankField(true)
      .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)
      .addField('📝| الرسالة ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});










const hi = [
'فكك ما يلي : تفكيك' ,
'فكك ما يلي : لعبة' ,
'فكك ما يلي : كلمة' ,
'فكك ما يلي : ديسكورد' ,
]
//هنا حط الاكلمات فوق بس اكتب بين كل كلمه وكلمه
// ' هنا الكلمه' ,
  client.on('message', message => {
if (message.content.startsWith('!فكك')) {
 var client= new Discord.RichEmbed()
 .setDescription(`${hi[Math.floor(Math.random() * hi.length)]}`)
  message.channel.sendEmbed(client);
}
});









client.on('ready',  () => {
  console.log('تم تشغيل: DiamondBot  ');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});










client.on('ready', () => {
     client.user.setActivity("!Help",{type: 'WATCHING'});

});

















client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "!mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});






































client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "!unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});



























client.on("message", message => {
    if (message.content === "!help") {
     const embed = new Discord.RichEmbed()
         .setColor("#ffff00")
         .setFooter('By ♪ ℬℐℓѦℓ✋')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`

     **✨Administrationr Commands | اوامر الاداره✨**
   !ban
   !mute
   !kick
   !unmute
   !bc
   !unban
   **✨Common Commands | الاوامر العامة ✨**
   !help
   !play
   **✨Games Commands  | اوامر الالعاب✨**
   !فكك
    Soon More Will be added
   `)
   const help = message.guild.channels.find("name", "help-command");
   if(!help) return message.channel.send("ya 7mar swy room asmh `help-command`")
   help.send(embed);

   message.guild.channels.find("id", "441306606014300161").send(`${message.author.tag} استخدم امر المساعدة`);
   }
   });














client.on('message', message =>{
    let prefix ='!fortnite'
      , role = message.guild.roles.find('name','GFortnite')
    if(message.content.startsWith(prefix)){
    message.guild.member(message.author).addRole(role)
    }
})

























 const pretty = require('pretty-ms')
,ti={};


var al7arthyCodes = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var al7arthyCodes2 = ["📙__60%__  **|**  📘__40%__","📙__63%__  **|**  📘__37%__","📙__89%__  **|**  📘__11%__","📙__97%__  **|**  📘__3%__"]
client.on('message', message => {
    if(!message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id,prefix="#!";//البريفكس
      if (ti[id] && (new Date).getTime() - ti[id] < 20*1000) {
          let r = (new Date).getTime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **Please wait ${pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == prefix+'لو خيروك'){

          try{
  //body
  }catch(e){

  }
         var Embed = new Discord.RichEmbed()
.setImage(al7arthyCodes[Math.floor(Math.random() * al7arthyCodes.length)])
message.channel.sendEmbed(Embed).then(msg => {
    msg.react('📘').then( r => {
        msg.react('📙')

        let blueFilter = (reaction, user) => reaction.emoji.name === '📘' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === '📙' && user.id === message.author.id;


    let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });


    blue.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));

        })

 orange.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));

        })

                                })
                                })
                              ti[id] = (new Date).getTime()
                                }
                                });
























client.login("NDQxNTg0ODYwNTI0NDQ1NzIx.DdCnug.vXgMTyR_g-DTAT-Z0JCX1areRJo");