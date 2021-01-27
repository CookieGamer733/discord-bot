import { Message, MessageEmbed } from "discord.js";
import { inspect } from "util";

const config = require("../config.json");

export const name = "eval";
export const _delete = false;

export async function execute(message: Message, args: string[]): Promise<void | Message> {
	if (message.author.id !== config.OWNERID)
		return message.channel.send(new MessageEmbed().setTitle("Security Error:").setDescription(`Cannot Use Command\nReason: User does not have permission to use this command.`).setColor("#FF0000"));
	try {
		const result = await eval(args.join(" "));
		if (!inspect(result).includes(config.TOKEN!)) {
			message.channel.send("```js\n" + inspect(result) + "```").catch(() => console.log);
		} else {
			message.channel.send(new MessageEmbed().setTitle("Security Error:").setDescription(`Cannot Send Result\nReason: Result contains Bot Token`).setColor("#FF0000"));
		}
	} catch (e) {
		message.channel.send("```" + e + "```");
	}
}