import { disabled } from "../index";
import { Message, MessageEmbed } from "discord.js";
import { titleCase } from "title-case";

const config = require("../config.json");

export const name = "enable";
export const _delete = false;

export function execute(message: Message, args: string[]): Promise<Message> {
	if (message.author.id !== config.OWNERID)
		return message.channel.send(new MessageEmbed().setTitle("Security Error:").setDescription(`Cannot Use Command\nReason: User does not have permission to use this command.`).setColor("#FF0000"));
  if (!args[0])
    return message.channel.send('Please give a command to Enable');
  if (disabled.delete(args[0]) == false) {
    message.channel.send(`${titleCase(args[0])} command isn't disabled. I can't enable a command that is not disabled`)
  } else {
    disabled.delete(args[0]);
    message.channel.send(`${titleCase(args[0])} command has been enabled`);
  }   
}