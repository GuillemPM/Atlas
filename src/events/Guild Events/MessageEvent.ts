import { Command } from "../../interfaces/Command";
import { Message } from "discord.js";
import { Bot } from "../../client/Client";
import { RunFunction } from "../../interfaces/Event";

export const run: RunFunction = async (client: Bot, message: Message) => {
  console.log('hola')
  if (
    !message.content.startsWith(client.configOptions.prefix) ||
    message.author.bot
  )
    return;

  const args: string[] = message.content
    .slice(client.configOptions.prefix.length)
    .trim()
    .split(/ +/g);
  const commandName: string = args.shift().toLowerCase();
  const command: Command =
    client.commands.get(commandName) ||
    client.commands.find(
      (command) => command.aliases && command.aliases.includes(commandName)
    );

  if (!command) return;

  // const av: Avatar = new Avatar();
  // await av.getById(message.author.id);

  // if (!av.id && command.name !== "start" && command.name !== "welcome") {
  //   return message.channel.send("Debes crear un avatar primero");
  // }

  // if (av.id && !av.connected && command.name !== "connect") {
  //   return message.channel.send("Debes conectarte primero");
  // }

  if (args.length) {
    const subcommandName: string = args[0].toLowerCase();
    const subcommand: Command =
      command.subcommands.get(subcommandName) ||
      command.subcommands.find(
        (subcommand) =>
          subcommand.aliases && subcommand.aliases.includes(subcommandName)
      );

    if (subcommand) {
      args.shift();
      return subcommand
        .run(client, message, args)
        .catch((err) => client.logger.error(err));
    }
  }

  command.run(client, message, args).catch((err) => client.logger.error(err));
};

export const name: string = "messageCreate";