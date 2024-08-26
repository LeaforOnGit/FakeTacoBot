import { TacoCounter } from "../models/tacoCounter";

function isToday(date: Date) {
    const today = new Date();
    
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
}

export const addTaco = async (userToAddTaco: string, UserSentTaco: string): Promise<TacoCounter | undefined> => {
    // TODO CHECK IF DIFF USERS

    // console.log(`adding taco to user ${userToAddTaco}, from ${UserSentTaco}`);

    const [ tacoCounterSender ] = await TacoCounter.findOrCreate({where: {user_id: UserSentTaco}});

    // if today was your "last" day sending tacos and you've reached your limit
    if(isToday(tacoCounterSender.last_day_sent_tacos) && tacoCounterSender.tacos_sent_today >= tacoCounterSender.max_tacos_per_day){
        console.log('You have no more tacos to send today you dummy');
        // TODO add ephemeral msg so user knows
        return undefined;
    }
    
    await tacoCounterSender.update({
        tacos_sent_today: BigInt(BigInt(tacoCounterSender.tacos_sent_today) + BigInt(1)), 
        last_day_sent_tacos: new Date(),
    });

    const [ tacoCounterReceiver ] = await TacoCounter.findOrCreate({where: {user_id: userToAddTaco}});
    await tacoCounterReceiver.update({tacos_received: BigInt(BigInt(tacoCounterReceiver.tacos_received) + BigInt(1))});

    return tacoCounterReceiver;
}