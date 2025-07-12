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

client.on('messageCreate', (message) => {
  // Check if the message mentions the bot
  if (message.mentions.users.has(client.user!.id)) {
    const sent = Date.now();
    message.reply(`🏓 Ping - Received at ${sent - message.createdTimestamp}ms ⚡`);
  }
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN); 

// ToDo:
// - Add a command to check the bot's latency
// - Add a command to check the bot's API latency
// - Add a command to check the bot's memory usage
// - Add a command to check the bot's CPU usage
// - Add a command to check the bot's disk usage
// - Add a command to check the bot's network usage
// - Add a command to check the bot's uptime
// - Add a command to check the bot's version
// - Add a command to check the bot's owner