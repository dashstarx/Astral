import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Bot ready event
client.once('ready', () => {
  console.log(`🚀 Astral is online! Logged in as ${client.user?.tag}`);
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN); 