const Discord = require('discord.js');
const bot = new Discord.Client();
const Aflt = require('./index.json');
const prefix = ("*");

bot.on("ready", function() {
    console.log("Je suis activé")
    bot.user.setActivity('faite *aide by boruto')
    .catch(console.error)
});

const ban = require('./kick et ban/ban');


bot.on('message', function(message){
    if (ban.match(message)){
        return ban.action(message)
    }
});

bot.on('message', message => {
    if(message.content === "secret"){
        message.reply("tu a trouvé un secret");
    }

    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#660033")
        .setTitle("menu des commandes")
        .setDescription("toute les commande na marche pas desolé on regle le probléme")
        .addField("a*aide", "pour les commande disponible")
        .setFooter("il a des secret a toi les trouvé")
        message.channel.sendMessage(help_embed)
        console.log("Un mec a utiliser le menu d'aide")
    }

    if(message.content === prefix + "admin"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#660033")
        .setTitle("a*menu des commandes pour admin")
        .addField("a*kick", "pour sortire les gens mes il pouront revenir comme des méchant")
        .addField("a*ban", "pour faire disparaitre les gens")
        message.channel.sendMessage(help_embed)
        console.log("Un mec a utiliser le menu d'aide pour admin")
    }
});
    
bot.login(process.env.TOKEN);
