const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ("a*");
const randum = 0;

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
    if(message.content === "secret") {
        message.reply("tu a trouvé un secret");
    }
        
    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#660033")
        .setTitle("menu des commandes")
        .setDescription("toute les commande na marche pas desolé on regle le probléme")
        .addField("Moderateur, "``Ban`` ``kick`` ``clear``")
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
        .addField("a*clear", "ne marche")
        message.channel.sendMessage(help_embed)
        console.log("Un mec a utiliser le menu d'aide pour admin")
    }
    
    if(message.content === prefix + "invite"){
        var help_embed = new Discord.RichEmbed()
        .addField("Pour m'invité le lien ```https://discordapp.com/oauth2/authorize?client_id=490606667080138753&scope=bot&permissions=2146958847```")
        message.channel.sendMessage(help_embed)
        console.log("BOT")
    }
   
    
if (message.content === prefix + "blague"){
    random()
    
    if (randnum ==1){
        message.reply("J'ai une blague sur les magasins. ```Mais elle a pas supermarché```");
        console.log(randnum);
    }
 
    if (randnum ==2){
        message.reply("Pourquoi est-ce c'est difficile de conduire dans le Nord ? ```Parce que les voitures arrêtent PAS DE CALER```");
        console.log(randnum);
    }
    
    if (randnum ==3){
        message.reply("Pourquoi est-ce qu'on met tous les crocos en prison ? ```Parce que les crocos dealent```");
        console.log(randnum);
    }
       
    if (randnum ==4){
        message.reply("Quel est le bar préféré des espagnols ? ```Le Bar-celone```");
        console.log(randnum);
    }

    if (randnum ==5){
        message.reply("Pourquoi est-ce que les livres ont-ils toujours chaud ? ```Parce qu’ils ont une couverture```");
        console.log(randnum);
    }

    if (randnum ==6){
        message.reply("Que se passe-t-il quand 2 poissons s'énervent ? ```Le thon monte```");
        console.log(randnum);
    }

    if (randnum ==7){
        message.reply("Que dit une imprimante dans l'eau ? ```J’ai papier```");
        console.log(randnum);
    }

    if (randnum ==8){
        message.reply("Quel est le sport préféré des insectes? ```Le criquet```");
        console.log(randnum);
    }

    if (randnum ==9){
        message.reply("Que fait un employé de chez Sephora à sa pause clope ? ```Il parfumer```");
        console.log(radnum);
    }
}
    
});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(10);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}
    
bot.login(process.env.TOKEN);
