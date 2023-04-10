import { ConfigOptions } from './interfaces/ConfigOptions';
import { config } from 'dotenv';
import * as File from './config.json';
import { Bot } from './client/Client';
import { GatewayIntentBits } from 'discord.js';
config();

const bot: Bot = new Bot({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent] });
const configOptions: ConfigOptions = { 
  token: process.env.DISCORD_TOKEN, 
  ...File as ConfigOptions 
};

bot.start(configOptions);