//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tSRHltaHpwcnlTMyt1RllIYzY4U0VlN0xJNkFWa1NUNUV3RllXc3BrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRk9UYjV0dHR5R0JlM0dMNGVVYmhxVW9KbmtnZXc1blg5Y2J0WTdObmZIMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSkF5eVlnamJPamJjckwwakRMY0NLSWZlcDl2b1ZlR0JNN2tPbDhHV0ZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrM0I4b2RuZkNpZjB5QjEzUFdzWm9NN2RseWYrY0NGZUU5enpjNjM4RmxRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBKTTZYb052VXRSWFJxYlRSdmZENDg4RkZsbjZqbWVHcjBQRVZDQ05ubk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYzeGJmRjJ5dW95Mk5aUmh5eGMyUFBwN1dnMUJYUnhuTVFiWUVPeWs4anc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUx0a0l6U0p2TGE1SmsvT3YxTVNWcGl4UzRqU0YzSDhUWHFXUzhiVjUwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkMwU2dDdmdscXZHSkdwamRDK29xQ2pwbm5pRDZmZG5QSWpUOFdHcG95Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw1bUFQbGxwOEVRTktJVm9PRThIT3FUOFFPc0F6MGZhMWJvSHlKZkg0aVBuYnRaeGxvdUE0QXJZWDM1LzJCZ2poQ09VMjhVYVFEV0hKRG1Yc3hlb0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5Ijoibm5YR2ljc01DdlJCNXdOYTk3SHRFRU9CdXFaMDlhUHc2YnNaMW9lcm93cz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiajl0ZWJHQ0JSN2VoeDVtVFZLUmdFUSIsInBob25lSWQiOiJkY2ZiODNjMS1jNTI0LTQ5ZGYtYmY5ZS0yYTExODkzMjhiZTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2hDNmxSRkY4WkdwVHJlTEZqMTcrNVBsbkU4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKNzVBaDliWkYzZ3lpdHNDWU0zU09Pbk5rYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGU1pTRUpGTSIsIm1lIjp7ImlkIjoiOTQ3NjA2Njg1MzU6MTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09TSDdYRVFvT0dqdEFZWUx5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1rWm85ZWNQdlNmUjRrNy9oMWtZU3RYOHlSbVBmaFZzUzloYmMvaXgyaTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IksyYWVjWmZXUC84Mzk2RERQT3JtOENPcW5JZjdpaUFvbTRIWStLeitFc1VMQjFZSTRzUkJDRHlUeEcxVVNienpoaGVJS2YyRjVjRGxSMXpvSnFVNENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSYnYyRmJsa01jNkVBbE9Kc3hrVW5IdDhqTkl1NmZDSGlOSnpjbmdiTkFzUzBVZTZocmJBanJMeDVTOVh2b0h0bkpmVEZEMnV0dG9pbE9HanFYTGVDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYwNjY4NTM1OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpwR2FQWG5ENzBuMGVKTy80ZFpHRXJWL01rWmozNFZiRXZZVzNQNHNkb3YifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAyNTA1NDF9=
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUIzOEJ4Z3dBbGlIMllHcEpqb3BySjN4VFg5ZUN5a2hRL084Tkxya1EwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnZtZXdQU0ZHL1h3aHh4REFjSll3YU4raEkvSkZnVG1PY1JDUTdjbi9WND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUEhsa2FPWlZhYkhqeUc1Z3BzL29GVVhPbU5YdjM2OG9TMlFJUWZRbTNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNXdoWXRZdDBERDFOQWg1YWhzWVliVllIM3hhWG9SeW5ZOCtFaWtTc2k0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllIQ05jK0xpUDk1aWVQc2hxcE52d3VYdWkxbzlmZFFFcXdteHhqSFNra3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1aM1NwQUo2RG5LcWV3NFZPTW5rMEJZYThvY24vWjYwbUY4YzBHSGpOQzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS04xcVBQM1pXMzIwTm5McCtGREJUMzcySnQwcGlLWFEzWXZESzM5eU5WST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXhBdEY1Y3AzNEtwQ3lCRkxhR0t3SngwWit4R0grZlFSZlBMTnM3akNqMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9sRlJuaDFRMWdEdTFRR3ZlMG9ROHNkd1hHeCtCRVBDeDhjNHRQeVZFOFdZZzBPMDJ0T2c1U3M5RmxhYlNaQzdrdzJDM2pBQkNCSVhwMjBDeWhuSmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiIzbE41QnpiUlN4WWRWMEJPSnVhekREbXlZUVQ0VTVETWVEQXlkSGF3UXNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0U0N5SFN4eFNQUy03UDJzeVd5NkpnIiwicGhvbmVJZCI6Ijg5MjNhMzZmLWVjZGMtNDAwNy05ZGFmLWNiMzRlNmMwNDEwZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOZmpyc1FDRWwzelZRTkRvTDRmOXpkaHhheGc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFhSjBvZzNDbnZqemY0Nm9Hb3JINnBoQ0NlYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2M2dPNERFSmVrZ0xRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imo4cDEycTRtbmk1UkVzYmxldWI0WjAzbllTdVJ2ZlhqMkdlcWRIKzdBRE09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFDQWN2SThoZ0NXRE10MEc1NHdEVUpwR21WdGJQS0JsR2FSSUxKMnFPMEZLYUFQVjBsUFR3ejV2bnhXT3BqbVBwSkZMMjNrcVdaSm1LZFBhOUNpYUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXOWZaWkR0NmhySjNmdWtxazFkeEJqUFdzOU10Qmh5dU01TWJEM2VLUUtDOWo1aHhQbmF2U3Qza3E4UnVNd3V3VTRpRWo0SzB6YXJpUHlUdEFkbERnQT09In0sIm1lIjp7ImlkIjoiOTIzMTkyMTczMzk4OjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkbTwnZG5IPCdkb7wnZGo8J2RuvCdkbAiLCJsaWQiOiIxNDQ1Nzc2MDg1NTY2MTk6MjNAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5MjE3MzM5ODoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZL0tkZHF1SnA0dVVSTEc1WHJtK0dkTjUyRXJrYjMxNDlobnFuUi91d0F6In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk2NjkyNzMsImxhc3RQcm9wSGFzaCI6IjJGOXl4eiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3FtIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
