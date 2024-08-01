//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "263719647303";
global.owner = process.env.OWNER_NUMBER || "263719647303";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1wNmpqWTlEUUJ0RXQ0ckpVaUoramsyei8reE9GY09tc0M3Nm1Pd0JGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZExwK2l3SElGQmdkeW9zYngwdVpmM2pNcEMyTEdvMmhvbThxS3NkaEJRQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlR2JLN0RqTWZNL0V2Y2lBMmxLQ2xsdWtKVXNHYXFVWTV0OEtlSDJoc0dnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuVXJreTVzOTJMWEk4ekJPTGNhMDREWFpyd2R1RkxHN1docGs2ZXJMZjFjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1QRURjM29rM3lHVjhWME1GRVhnR1NoeStrRFJKVWltM2VVVFU4WUFXMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcxN3oyL3RZUWE3bm9uazBlbFBWbWhmT0RkM1ZSTlRnUzduOU1rdlVLQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERwVXBjM3d5bWdLeFoyVW96V1NkYVM5RlhmeC95WTRVVTA4MHhCTTBsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWRPZUg2L2JoajAybFd2aER2WG1KMm9ZMlZFWisybFF2blA2bmduR1ZGaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklsVnhQRlFMb0hFaVEzaHFxN1NyaVNNTkNJV1NwRi9tTGU3dmlRdzduUXV6N1pEencrMnAzeE9PUlVjdjlBUTI2R0xKTWNSazB4VDZ1akRMWlFyRENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiI3bzZ2cWNIa2RsdHpBYUlaY0pCQXI0VWFnMzZWRDRMeVppZnRyRnp2MERBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQZDJROVVXd1NmbUFTRVVZMlhzZ1NBIiwicGhvbmVJZCI6ImQzODk0YjY2LWRiYjctNGI0NC04M2NmLTEyNDI2YzQ5NTUwYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvWlplY3ZoRmFFZzFtWXI2Vk5YUnc2Sm9Cd2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTF2R2RXenVHbGNNKzJoZzExWEczOGd2NThBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBDUDdSSEREIiwibWUiOnsiaWQiOiIyNjM3MTkwNjQ4MDU6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtJjhtIDKgOG0gMqfyp/htIB4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZXF5N1VCRU5UZnJyVUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrN3ZvWG93bEZrRUtBSnlWWTZIaHVRUFdDT2ZxaStSeStSTWpPcHphWldZPSIsImFjY291bnRTaWduYXR1cmUiOiJGaXRsNjZCN2taLzFpMUlUdEJFWlZwZGtaSnFhbXJaNTk2bU1zRkJ5OHpLa3l4eXNqZmFwcFIvTVkwdVc4MXV4SWkrOWJzOFN2bys2aElEZnBEbXRBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZTFMa1d5bEpRNFAzSW1VT2Q3cUp0Z2FBdmVIOU94SW55Vmk5WU50dXlUS2VXWWdhVStCWE5NQXlNTWgxWjNtSjR1bzhub0xXNnlNbGlSWW5ETVNHQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTkwNjQ4MDU6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmdTc2RjZNSlJaQkNnQ2NsV09oNGJrRDFnam42b3ZrY3ZrVEl6cWMybVZtIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTI3NzE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUI5dCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MR FRANK-V2™`",
  author: process.env.PACK_AUTHER || "MR FRANK",
  packname: process.env.PACK_NAME || "GALA BY",
  botname: process.env.BOT_NAME || "MR FRANK",
  ownername: process.env.OWNER_NAME || "MR FRANK",
  errorChat: process.env.ERROR_CHAT || "263719647303",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
