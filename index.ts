import "array-flat-polyfill";
import "./database";
import { Client, Message } from "discord.js";
import { permissions } from "./permissions";
import { readdirSync } from "fs";

export const client = new Client({
  disableMentions: "everyone"
});
interface Command {
  name: string;
  execute(message: Message, args: string[]): void;
  _delete: boolean; // If true, the message calling the command will be deleted
  permissions: string;
};
const commands = new Map<string, Command>();
export const disabled = new Set<string>();
(async () => {
  for (const file of (await readdirSync(`./commands/`))) {
    const command: Command = await import(`./commands/${file}`);
    try {
      commands.set(command.name, command);
      console.log(`./commands/${file} imported`);
    } catch (e) {
      console.error(e);
    }
  }
  try {
    client.login(process.env.TOKEN!);
  } catch (e) {
    console.error(e);
  }
})();
client
  .on("debug", console.log)
  .on("warn", console.log)
  .on("ready", () => {
    console.log("Bot ready!");
    client.user!.setPresence({
      activity: {
        type: "LISTENING",
        name: `messages with ${process.env.PREFIX!}`,
      },
      status: "online",
    });
    console.log("Status and activity set");
  })
  .on("message", (message: Message) => {
    if (!message.content.toLowerCase()
      .startsWith(process.env.PREFIX!)) return;
    const args = message.content.slice(process.env.PREFIX!.length)
      .trim()
      .split(/\s+/);
    if (!args.length) return;
    const commandName = args[0].toLowerCase();
    args.shift();
    if (!commandName) return;
    if (disabled.has(commandName))
      return message.channel.send("That command has been disabled");
    if (!commands.has(commandName)) return;
    const command = commands.get(commandName)!;
    if (!permissions.get(command.permissions || "none")!(message))
      return message.channel.send("You don't have permission to use that command!");
    command.execute(message, args);
    if (message.channel.type !== "dm" && !command._delete) message.delete();
  });

// ***************************************************************************
// ** All custom actions go here \/ \/ 
// ***************************************************************************

// ***** XP handler ***** 
import xphandler_init from "./xphandler";
xphandler_init(client);
// ***** Error logging ***** 
process.on('unhandledRejection', (promise) => {
  console.log(`Unhandled Rejection at:\n`, promise);
});
process.on('uncaughtException', (promise) => {
  console.log(`Uncaught Exeception at:\n`, promise);
});