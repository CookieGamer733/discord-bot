import { Message, MessageEmbed } from "discord.js";

const config = require("../config.json");

export const name = "kill";
export const _delete = false;

export function execute(message: Message): Promise<void | Message> {
	if (message.author.id !== config.OWNERID)
		return message.channel.send(new MessageEmbed().setTitle("Security Error:").setDescription(`Cannot Use Command\nReason: User does not have permission to use this command.`).setColor("#FF0000"));
  message.channel.send("Process exited").then(() => process.exit());
}