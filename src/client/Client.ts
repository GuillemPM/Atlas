import consola, { Consola } from "consola";
import { Client, Collection, Message } from "discord.js";
import glob from 'glob';
import { Command, SlashCommand } from "../interfaces/Command";
import { ConfigOptions } from "../interfaces/ConfigOptions";
import { Event } from "../interfaces/Event";
import { promisify } from "util";
import { parse } from "path";

const globPromise = promisify(glob);


class Bot extends Client {

  public logger: Consola = consola;
  public commands: Collection<string, Command> = new Collection();
  public slashCommands: Collection<string, SlashCommand> = new Collection();
  public events: Collection<string, Event> = new Collection();
  public configOptions: ConfigOptions;

  public async start(configOptions: ConfigOptions): Promise<void> {
    this.configOptions = configOptions;

    this.login(this.configOptions.token);

    

    const eventFiles: string[] = await globPromise(`${__dirname}/../events/**/*{.ts,.js}`);
    eventFiles.map(async (value: string) => {
      const file: Event = await import(value);
      this.events.set(file.name, file);

      this.on(file.name, file.run.bind(null, this))
    });
  }
}

export { Bot };