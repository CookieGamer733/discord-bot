import { disabled } from "../index";
import { Message } from "discord.js";
import { titleCase } from "title-case";
export const name = "enable";
export const _delete = false;
export const permissions = "lv4";
export function execute(message: Message, args: string[]) {
  if (!args[0])
    return message.channel.send('Please give a command to Enable');
  if (disabled.delete(args[0]) == false) {
    message.channel.send(`${titleCase(args[0])} command isn't disabled. I can't enable a command that is not disabled`)
  } else {
    disabled.delete(args[0]);
    message.channel.send(`${titleCase(args[0])} command has been enabled`);
  }   
}