import { Client, Message } from "discord.js";
import { readdirSync } from "fs";

const config = require("./config.json");

export const client = new Client({
  disableMentions: "everyone"
});
interface Command {
  name: string;
  execute(message: Message, args: string[]): void;
  _delete: boolean; // If true, the message calling the command will be deleted
};
const commands = new Map<string, Command>();
export const disabled = new Set<string>();
(async (): Promise<void> => {
  for (const file of (readdirSync(`./commands`))) {
    const command: Command = await import(`./commands/${file}`);
    try {
      commands.set(command.name, command);
      console.log(`./commands/${file} imported`);
    } catch (e) {
      console.error(e);
    }
  }
  try {
    client.login(config.TOKEN!);
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
        name: `messages with ${config.PREFIX!}`,
      },
      status: "online",
    });
    console.log("Status and activity set");
  })
  .on("message", (message: Message) => {
    if (!message.content.toLowerCase().startsWith(config.PREFIX!)) return;
    const args = message.content.slice(config.PREFIX!.length).trim().split(/\s+/);
    if (!args.length) return;
    const commandName = args[0].toLowerCase();
    args.shift();
    if (!commandName) return;
    if (disabled.has(commandName)) return message.channel.send("That command has been disabled");
    if (!commands.has(commandName)) return;
    const command = commands.get(commandName)!;
    command.execute(message, args);
    if (message.channel.type !== "dm" && command._delete) message.delete();
  });

// ***************************************************************************
// ** All custom actions go here \/ \/ 
// ***************************************************************************

// ***** Error logging *****
process.on('unhandledRejection', (promise): void => {
  console.log(`Unhandled Rejection at:\n`, promise);
});
process.on('uncaughtException', (promise): void => {
  console.log(`Uncaught Exeception at:\n`, promise);
});