import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import { onMessageCreate } from './events/onMessageCreate';

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.login(process.env.DISCORD_TOKEN);

console.log('Bot running');

client.on('ready', () => console.log('Bot ready'));

client.on('messageCreate', async (message) => onMessageCreate(message));
