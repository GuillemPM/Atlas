import { Command, SlashCommand } from "../../interfaces/Command";
import { Interaction } from "discord.js";
import { Bot } from "../../client/Client";
import { RunFunction } from "../../interfaces/Event";

export const run: RunFunction = async (client: Bot, interaction: Interaction) => {
  console.log('interaction')
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;
  console.log(commandName)
 
  const command: SlashCommand = client.slashCommands.get(commandName);
  if (!command) return;

  command.run(client, interaction).catch((err) => client.logger.error(err));
};

export const name: string = "interactionCreate";