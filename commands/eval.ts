import { Message, MessageEmbed } from "discord.js";
import { inspect } from "util";
export const name = "eval";
export const _delete = false;
export const permissions = "lv4";
export async function execute(message: Message, args: string[]) {
	try {
		const result = await eval(message.content.slice(
      process.env.PREFIX!.length + name.length
		));
		if (!inspect(result).includes(process.env.TOKEN!)) {
			message.channel.send("```js\n" + inspect(result) + "```").catch(() => console.log);
		} else {
			message.channel.send(new MessageEmbed().setTitle("Security Error:").setDescription(`Cannot Send Result\nReason: Result contains Bot Token`).setColor("#FF0000"));
		}
	} catch (e) {
		message.channel.send("```" + e + "```");
	}
}