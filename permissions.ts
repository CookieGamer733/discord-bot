import { Message } from "discord.js";

const ownerID = process.env.OWNERID!;

export const permissions = new Map<string, (message: Message) => boolean>()
  .set("lv4", message => owners.has(message.author.id))
  .set("lv3", message => Boolean(message.member && message.member.permissions.has("ADMINISTRATOR") || owners.has(message.author.id)))
  .set("lv2", message => Boolean(message.member && message.member.permissions.has("MANAGE_MESSAGES"))) /* Moderator */
  .set("lv1", _ => true);