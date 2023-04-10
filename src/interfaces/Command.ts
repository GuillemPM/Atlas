import { Bot } from '../client/Client'
import { Collection, CommandInteraction, Interaction, Message } from "discord.js";

export interface RunFunction {
  (client: Bot, message: Message, args: string[]): Promise<unknown>
}

export interface RunSlashCommandFunction {
  (client: Bot, interaction: CommandInteraction): Promise<unknown>
}

export interface AddSubcommandFunction {
  (subcommand: Command)
}

export interface Command {
  name: string,
  description: string,
  aliases: string[],
  permisions: number,
  subcommands: Collection<string, Command>,
  run: RunFunction
}

export interface SlashCommand {
  name: string,
  description: string,
  run: RunSlashCommandFunction
}
