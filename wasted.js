const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')


const canvacord = require("canvacord");

module.exports = async (context) => {
        const { client, m, Tag, botname } = context;

let cap = `Converted By ${botname}`;

try {

        if (m.quoted) {
            try {
                img = await client.profilePictureUrl(m.quoted.sender, 'image')
            } catch {
                img = "https://files.catbox.moe/cs4kkz.jpg"
            }
                        result = await canvacord.Canvacord.wasted(img);
        } else if (Tag) {
            try {
                ppuser = await client.profilePictureUrl(Tag[0] || m.sender, 'image')
            } catch {
                ppuser = 'https://files.catbox.moe/cs4kkz.jpg'
            }
                        result = await canvacord.Canvacord.wasted(ppuser);
        } 


        let sticker = new Sticker(result, {
            pack: `Triggred`,
            author:"" ,
            categories: ['🤩', '🎉'],
            id: '12345',
            quality: 75,
            background: 'transparent' // The sticker background color (only for full stickers)
        })
        const stikk = await sticker.toBuffer()
       await client.sendMessage(m.chat, {sticker: stikk}, {quoted: m})


        

} catch (e) {

m.reply("Something wrong occured. 😞")  

}
    }