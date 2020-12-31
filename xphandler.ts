import { Users } from "./database";
import { Client } from "discord.js";

export default function init(client: Client): void {
  client.on("message", async message => {
    if (message.author.bot ||
        message.content.startsWith(process.env.PREFIX!) ||
        message.channel.type == "dm") return;
    let user = await Users.findOne({ id: message.author.id });
    if (user === null) user = new Users({ id: message.author.id, xp: 0, level: 0, tag: message.author.tag });
    user.tag = message.author.tag;
    user.xp += Math.round(Math.random() * 10) + 5;
    const xpToLevelUp = getXPNeededForLevel(user.level);
    if (xpToLevelUp <= user.xp) {
      user.xp -= xpToLevelUp;
      user.level++;
      message.channel.send(`${message.author} leveled up. ${message.author} is now level ${user.level}`)
    }
    await user.save();
  });
}
const baseAmount = 300;
const increaseAmount = 1.15;
export function getXPNeededForLevel(lvl: number, top: boolean = true): number {
  if (lvl < 1) return baseAmount;
  let xp = getXPNeededForLevel(lvl - 1, false) * increaseAmount;
  if (top) xp = Math.round(xp);
  return xp;
}
