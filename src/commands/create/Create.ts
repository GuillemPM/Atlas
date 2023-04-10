import { Collection, CollectorFilter, Message, EmbedBuilder, MessageReaction, User, SlashCommandBuilder, Interaction, CommandInteraction, ActionRowBuilder, StringSelectMenuBuilder } from "discord.js";
import { Bot } from "../../client/Client";
import { Command, RunFunction, RunSlashCommandFunction, SlashCommand } from "../../interfaces/Command";
import { AdvancedStats, Avatar, MainStats } from "../../dbInit";

export class Create implements SlashCommand {
	public name: string = 'create';
  public description: string = 'Use \`r!create\` to start for first time your journey!';

	public run: RunSlashCommandFunction = async (client: Bot, interaction: CommandInteraction) => {
		const row = new ActionRowBuilder<StringSelectMenuBuilder>()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	}
}