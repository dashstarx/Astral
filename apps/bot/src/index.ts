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

// Message event - respond to ping
client.on('messageCreate', (message) => {
  // Check if the message mentions the bot or contains "ping"
  if (message.mentions.users.has(client.user!.id)) {
    const sent = Date.now();
    message.reply(`🏓 Ping - Received at ${sent - message.createdTimestamp}ms ⚡`);
  }
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN); 