import { TacoMessageLog } from "../models/tacoMessageLog";


export const saveTacoMessage = async (messageContent: string, receiver: string, sender: string) => {
    TacoMessageLog.build({message_content: messageContent, receiver_id: receiver, sender_id: sender}).save();
}