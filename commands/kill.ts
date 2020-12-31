import { Message } from "discord.js";
export const name = "kill";
export const _delete = false;
export const permissions = "lv4";
export function execute(message: Message) {
  message.channel.send("Process exited").then(() => process.exit());
}