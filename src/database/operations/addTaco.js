import { TacoCounter } from "../models/tacoCounter.js";

const DAILY_TACO_LIMIT = 4;

function isToday(date) {
    const today = new Date();
    
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
}

export const addTaco = async (userToAddTaco, UserSentTaco) => {
    // TODO CHECK IF DIFF USERS

    // console.log(`adding taco to user ${userToAddTaco}, from ${UserSentTaco}`);

    const [ tacoCounterSender ] = await TacoCounter.findOrCreate({where: {user_id: UserSentTaco}});

    // if today was your "last" day sending tacos and you've reached your limit
    if(isToday(tacoCounterSender.last_day_sent_tacos) && tacoCounterSender.tacos_sent_today >= tacoCounterSender.max_tacos_per_day){
        console.log('You have no more tacos to send today you dummy');
        // TODO add ephemeral msg so user knows
        return false;
    }
    
    await tacoCounterSender.update({tacos_sent_today: tacoCounterSender.tacos_sent_today + 1, last_day_sent_tacos: new Date()});

    const [ tacoCounterReceiver ] = await TacoCounter.findOrCreate({where: {user_id: userToAddTaco}});
    await tacoCounterReceiver.update({tacos_received: tacoCounterReceiver.tacos_received + 1});

    return true;
}