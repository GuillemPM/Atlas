import { parse } from "path";
import { Bot } from "../client/Client";
import { Command, SlashCommand } from "../interfaces/Command";
import glob from 'glob';
import { promisify } from "util";

const globPromise = promisify(glob);

export default async function registerCommands(client: Bot) {
  const commandFiles: string[] = await globPromise(`${__dirname}/../commands/**/*{.ts,.js}`, { ignore: [`${__dirname}/../commands/**/subcommands/**/*{.ts,.js}`]});
  console.log(__dirname)
    commandFiles.map(async (value: string) => {
      const { name } = parse(value)
      const file: SlashCommand = new (await import(value))[name[0].toUpperCase() + name.substring(1)]();

      client.slashCommands.set(file.name, file);
      console.log(file.description)
      client.application.commands.create({ name: file.name, description: file.description });

      console.log(`Command ${file.name} loaded`);
    });
}