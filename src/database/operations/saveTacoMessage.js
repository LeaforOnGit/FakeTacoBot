import { TacoMessageLog } from "../models/tacoMessageLog.js"


export const saveTacoMessage = async (messageContent, receiver, sender) => {
    TacoMessageLog.build({message_content: messageContent, receiver_id: receiver, sender_id: sender}).save();
}