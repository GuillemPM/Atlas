import { Bot } from "../../client/Client";
import registerCommands from "../../utils";
import { RunFunction } from "../../interfaces/Event";

export const run: RunFunction = async (client: Bot) => {
  await registerCommands(client);
  client.logger.success(`${client.user.tag} está online`)
}

export const name: string = 'ready';