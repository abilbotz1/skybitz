import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {

if (command == 'tiktokwm') {
let linkwm = `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`
if (!linkwm) throw 'Can\'t download video!'
let caption = `
Url: ${await shortUrl(args[0])}`
    conn.sendButton(m.chat, caption, args[0] + '.mp4', await(await fetch(linkwm)).buffer(), [['🎀 Menu', '/menu']], m, adReply)
}

if (command == 'tiktoknowm') {
let link = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${global.lolkey}&url=${args[0]}`)
let has = await link.json()
let x = has.result
if (!x.link) throw 'Can\'t download video!'
let caption = `
Title: ${x.title}
Keyword: ${x.keywords}
Description: ${x.description}
Url: ${await shortUrl(x.link)}`
    conn.sendButton(m.chat, caption, x.title + '.mp4', await(await fetch(x.link)).buffer(), [['🎀 Menu', '/menu']], m, adReply)
}

if (command == 'tiktokdl') {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    let caption = `${htki} ᴛɪᴋᴛᴏᴋ ᴡᴍ ${htka}\n➔ ɴɪᴄᴋɴᴀᴍᴇ ${nickname}\nᴅᴇsᴄʀɪᴘᴛɪᴏɴ:\n${description}`
    conn.sendButton(m.chat, caption, nickname + '.mp4', await(await fetch(url)).buffer(), [['🎀 Menu', '/menu']], m, adReply)
}

}
handler.command = handler.help = ['tiktokwm', 'tiktoknowm', 'tiktokdl']
handler.tags = ['downloader']

export default handler

async function getInfo(url) {
	// url = (await fetch(url)).url
	let id = url.split('?')[0].split('/')
	let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
	return res?.seoProps?.metaParams
}

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}