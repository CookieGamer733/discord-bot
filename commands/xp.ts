import { Message, MessageEmbed } from "discord.js";
import { Users } from "../database";
import { getXPNeededForLevel } from "../xphandler";
export const name = "xp";
export const _delete = false;
export const permissions = "lv1";
export async function execute(message: Message) {
  if (message.channel.type == "dm") return message.channel.send("You cannot have XP in a DM channel");
  const userID = (message.mentions.users.first().value || message.author);
  let user = await users.findOne({ id: userID.id });
  let xp = 0,
      level = 0;
  if (user !== null) {
    xp = user.xp;
	  level = user.level;
  }
  const userDisplayName = (message.mentions.members!.first(1).value || message.member!).displayName;
  const xpToNextLevel = getXPNeededForLevel(level);
  const embed = new MessageEmbed()
    .setTitle(`\`${userDisplayName}'s XP\``)
    .setDescription(`Level ${level}\n${xp}/${xpToNextLevel} XP\n${xpToNextLevel - xp} XP until next level`)
    .setColor("#00ff33");
  message.channel.send(embed);
}