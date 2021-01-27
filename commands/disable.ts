import { disabled } from "../index";
import { Message, MessageEmbed } from "discord.js";
import { titleCase } from "title-case";

const config = require("../config.json");

export const name = "disable";
export const _delete = false;

const dontDisable = new Set<string>([
	"disable",
	"enable",
	"eval",
	"kill"
]);

export function execute(message: Message, args: string[]): Promise<Message> {
	if (message.author.id !== config.OWNERID)
		return message.channel.send(new MessageEmbed().setTitle("Security Error:").setDescription(`Cannot Use Command\nReason: User does not have permission to use this command.`).setColor("#FF0000"));
	if (args[0] == "list") {
		message.channel.send(`Disabled commands:\n**${Array.from(disabled).map(titleCase).join("\n")}**`);
	} else {
		if (!args[0])
			return message.channel.send("Please give a command to disable");
		if (dontDisable.has(args[0]))
			return message.channel.send("That command is not able to be disabled");
		message.channel.send(`${titleCase(args[0])} command has been disabled`);
		disabled.add(args[0]);
	}
}