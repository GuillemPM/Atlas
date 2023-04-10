import { Collection, CollectorFilter, Message, EmbedBuilder, MessageReaction, User, SlashCommandBuilder, Interaction, CommandInteraction } from "discord.js";
import { Bot } from "../../client/Client";
import { Command, RunFunction, RunSlashCommandFunction, SlashCommand } from "../../interfaces/Command";
import { AdvancedStats, Avatar, MainStats } from "../../dbInit";

export class Start implements SlashCommand {
	public name: string = 'start';
  public description: string = 'Use \`r!start\` to start for first time your journey!';

	public run: RunSlashCommandFunction = async (client: Bot, interaction: CommandInteraction) => {
		const msgText = `Greetings, adventurer! I'm **Atlas**, your trusty guardian. 

		Before you set out on your journey, we must determine which of the six regions of Crystalia best suits your unique personality. 

		Answer the following questions with honesty and thoughtfulness, and we will assign you to the region that aligns with your values, motivations, and fears. 
		
		Each region has its own strengths, challenges, and secrets to uncover, so choose wisely. 
		
		Are you ready to discover your destiny in Crystalia? Then type \`/create\` to begin the personality test.`

		const embedBuilder: EmbedBuilder = 
			new EmbedBuilder()
				.setTitle('Welcome to the world of Crystalia!')
				.setDescription(msgText)
				.setThumbnail('https://i.imgur.com/IYYyPTz.gif')
				.setColor([191, 232, 255]) //Light blue
				.setFooter({
					text: 'Explore the wonders of Crystalia with Atlas by your side'
				})

		return interaction.reply({ embeds: [embedBuilder] });
	}
}