import { addTaco } from "../database/operations/addTaco.js";
import { saveTacoMessage } from "../database/operations/saveTacoMessage.js";

export const onMessageCreate = async (message) =>{
    // console.log("\n");
    // console.log(message);

    if(!message.content.includes('🌮')){
        //No tacos here sadge 
        console.log("NO TACOS HERE YOU DUMMY");
        return;
    }

    if(message.mentions.users.size != 1){
        //Currently this will only support 1 mention
        console.log("ONE MENTION AT A TIME YOU DUMMY");
        return;
    }

    const userMentioned = message.mentions.users.keys().next().value;

    // console.log(`Received msg: ${message.content} \n\tWith mention to user: ${userMentioned}\n\tFrom user: ${message.author.id}`);

    if(addTaco(userMentioned, message.author.id)){
        saveTacoMessage(message.content, userMentioned, message.author.id);
    }

    /*
    if(!message.author.bot){
        message.author.send(`ECHO ${message.content}`);
    }
        */
}