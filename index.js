const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ("a*");
const random = 0;

bot.on("ready", function() {
    console.log("Je suis activé")
    bot.user.setActivity('faite a*aide by boruto')
    .catch(console.error)
});

const ban = require('./ban');

bot.on('message', function(message){
    if (ban.match(message)){
        return ban.action(message)
    }
})

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
    
    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas la permission !");
    
        let args = message.content.split(" ").slice(1);
    
        if(!args[0]) return message.channel.send("Tu doit préciser un nombre de messages a supprimer !")
        message.chanel.bulkDelete(args[0]).then(() => {
            message.channel.send('${args[0]} message ont été supprimés !');
        })
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
    
        if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .addField("'''mon lien invide")
        .setFooter("il a des secret a toi les trouvé")
        message.channel.sendMessage(help_embed)
        console.log("Un mec a utiliser le menu d'aide")
    }
    
    if(message.content === "blague"){
       random();
       
       if (randnum == 1){
        message.reply("J'ai une blague sur les magasins Mais elle a pas supermarché");
        console.log(Blague1);
       }
       
       if (randnum == 2){
        message.reply("Pourquoi est-ce qu'on met tous les crocos en prison ? Parce que les crocos dealent.");
        console.log(blague2);
       }
    }
    
});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randum = Math.floor(Math.random() * (max - min +1) + min);
}
    
bot.login(process.env.TOKEN);
