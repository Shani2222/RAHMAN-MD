
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "rahmanjaniii008@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Rahmantech1/RAHMAN-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/034990b2d62595148af2e.jpg";
global.devs = "923319709781";
global.sudo = process.env.SUDO || "923319709781";
global.owner = process.env.OWNER_NUMBER || "923319709781";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVA1ZCtIU0lmSkRpclk5K2J5cWVGT1ljMEgycGEvL0V0amo3bVQzSklWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VHVi9yUUNKcWQ1QXJhMU11dHVDMVV3NlhXbGh6SlhrcmlOQUNDdVpsdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSjdmMFR3N04vekEyY0szRktYeWRVVHBaNDgralJ6R3ZnL2NCM0FJNFgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFNzVMTHlJZytvNXZ6RjhFdmxub0FqR09QNTBzUEF1aDFCVHFFS1JjQUN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGcExpK3k1L1VUV1Zkb2VxNnpDdHZqR1F4OUxOb2VVVTd2L1RVK3F2azg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB3d0hIUk5MT3hPRjlPOEFVVE5LUm5QMEx3Vnd5bkdpaGVQMnFySEVoQzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0E1dXphd290UTFNcGo1SDhnWnZzN1RRRFg5dzFpMGNhOXU4Yk8wTnJIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkZYRTdYMUViNzZreDQ1YmRZWkRyTzY1NktQQ05vQmJDblJwa3ozNFhBbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5XdWt3UDNxbEpqemVlazlRUUdUMzVVOTZrc20rcDBocytNT2RLeHZ1WVQrSGVzQ1RDWEZyTGNmbkttY25mdjR6NDIxNHk5dVdRRGwrb2tEVTk5bWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJwRk5WUWVsRWdzTGhEM2lwTUg1cnRZU1RHNlJ3WGNBZ2RFZHlKd2VBUzUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA5ODk2NzI1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMjE3ODAxQkYzQTI1RjdEMjlFRjNBNTA5OEVFNUVBNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5MDQwNjA0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwOTg5NjcyNTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTg1Q0UzNEQ3Q0U2NTgwMzREMEJBRTY2QTYzRkI5RDUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTA0MDYwNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDk4OTY3MjUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE0ODU4ODY1NkEyNTVGMUI1NzY1ODgwMEE0REMyMDYxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTkwNDA2MDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA5ODk2NzI1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyQjkwMUY3OEJGQkUyNDJCMDA3RkM1ODc5MkI0QjQwMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5MDQwNjA2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTTjg0bFQ1MVJqYUZ3VWJjNXFPVDlBIiwicGhvbmVJZCI6ImNkNTUyMTQyLTQ3ZTEtNDczMC05YTdkLTEyMDA1NTc0YzAxNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQY2xTR2RQZi9oSC9OOGRkNkFOQjFpSUNGRXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEpCYzJKN2pITWYrcmtMSUZuMUZ3b1JOMC9ZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk0MUNTUEJWIiwibWUiOnsiaWQiOiI5MjMwOTg5NjcyNTM6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSQUhNQU4gVEVDSCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTURjenhjUTJQVFpzd1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOXgzZEJxVG1ONlo1U0RXM3pnb0tCNFlCNFNLZ3Q4U2s4SEc0dzJPeHpWUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMWtZOXU4UlRkSG9FRVk3cS9lNmVGYm1MUTd3Ykk5S21KNEVQOENQbUxUTzVZbUI0ZzRHVGlORitGMUt4VEloK0srQlRvb29FSFUxRGVkVTZhR3JTQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1ZeXE5U245VjJOWGluZHNqWnpMVXZjQnFFTkR4aWxDcGpCZFF2Q3R3TGIyNHJ5aUd0a3JkQW1EaGo3VVJ0Q0VFQ2QwVFFvcWc0WWQ5Zk5rZlJVbmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDk4OTY3MjUzOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmNkM1FhazVqZW1lVWcxdDg0S0NnZUdBZUVpb0xmRXBQQnh1TU5qc2MxVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTA0MDYwMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEQisifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ʀᴀʜᴍᴀɴ-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐀𝐇𝐌𝐀𝐍-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "ᴅᴀʀᴋ ᴇᴠɪʟ",
  errorChat: process.env.ERROR_CHAT || "923319709781",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "RAHMAN").toUpperCase(),
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
