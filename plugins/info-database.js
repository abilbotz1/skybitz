let handler = async (m, { usedPrefix, command, conn, text }) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let cap = `ššš­šššš¬š šššš­ šš§š¢ ${totalreg} šš¬šš«\nššš š¢š¬š­šš« šššš­ šš§š¢ ${rtotalreg} šš¬šš«`
    await conn.send2ButtonLoc(m.chat, 'https://telegra.ph/file/279ce9a38830035aa007f.jpg', cap, author, 'Menu', '.menu', 'Owner', '.owner', m)
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(user|database|jumlahdatabase)$/i
handler.limit = true

export default handler