import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"displayName": "RiellXzy",
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;F;;;FN:F\nORG:F;\nTEL;type=CELL;type=VOICE;waid=6282146218274:+62-821-4621-8274\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

if (command == 'โowner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;RiellXzy\nNICKNAME:๐ Owner Khurushi Bot\nORG:RiellXzy\nTITLE:soft\nitem1.TEL;waid=6282146218274:+62-821-4621-8274\nitem1.X-ABLabel:๐ Nomor Owner\nitem2.URL:https://s.id/Cerdasin62\nitem2.X-ABLabel:๐ฌ More\nitem3.EMAIL;type=INTERNET:Riell@gmail.com\nitem3.X-ABLabel:๐ Mail Owner KhurushiBot\nitem4.ADR:;;๐ฎ๐ฉ Indonesia;;;;\nitem4.X-ABADR:๐ฌ More\nitem4.X-ABLabel:๐ Lokasi Saya\nBDAY;value=date:๐ 03 july 2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: q })
let caption = `๐ Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['๐ Sapa Owner', 'Huuu']], m, { quoted: q, mentions: conn.parseMention(caption) })
}
if (command == 'โpengembang') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6282146218274:+62-821-4621-8274\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: q })
}
if (command == 'โcreator') {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `๐ Developer Bot `, `๐ซ Don't call me ๐ฅบ`, `arifofc19@gmail.com`, `๐ฎ๐ฉ Indonesia`, `๐ https://Riellxz19.github.io/`, `๐ค Gada pawang nih senggol dong ๐`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `๐ฅ Bot WhatsApp ๐ฃ`, `๐ต Don't spam/call me ๐ข`, `Nothing`, `๐ฎ๐ฉ Indonesia`, `๐ https://blog.com/Riellll89/`, `๐ค Hanya bot biasa yang kadang suka eror โบ`]
  ], q)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya ka๐`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak๐`, sentMsg, {mentions: [m.sender]})
  }
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
