import { disabled } from "../index";
import { Message } from "discord.js";
import { titleCase } from "title-case";
export const name = "disable";
export const _delete = false;
export const permissions = "lv4";
const dontDisable = new Set<string>([
  "disable",
  "enable",
  "eval",
  "kill"
]);
export function execute(message: Message, args: string[]) {
	if (args[0] == "list") {
    // List all commands that are disabled
		message.channel.send(`Disabled commands:\n**${Array.from(disabled).map(titleCase).join("\n")}**`);
	} else { 
		if (dontDisable.has(args[0]))
      return message.channel.send("That command is not able to be disabled");
		if (!args[0])
      return message.channel.send("Please give a command to disable");
		message.channel.send(`${titleCase(args[0])} command has been disabled`);
		disabled.add(args[0]);
	}
}