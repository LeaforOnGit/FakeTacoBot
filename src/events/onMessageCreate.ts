import { Message } from "discord.js";
import { addTaco } from "../database/operations/addTaco";
import { saveTacoMessage } from "../database/operations/saveTacoMessage";

export const onMessageCreate = async (message: Message<boolean>) =>{

    //No tacos here sadge 
    if(!message.content.includes('🌮')){
        console.log("NO TACOS HERE YOU DUMMY");
        return;
    }

    //Currently this will only support 1 mention
    if(message.mentions.users.size != 1){
        console.log("ONE MENTION AT A TIME YOU DUMMY");
        return;
    }

    const userMentioned = message.mentions.users.keys().next().value;

    if(await addTaco(userMentioned, message.author.id)){
        saveTacoMessage(message.content, userMentioned, message.author.id);
    }

    /*
    if(!message.author.bot){
        message.author.send(`ECHO ${message.content}`);
    }
        */
}