module.exports = async (context) => {
  const { client, m } = context;


  const messageCaption = `
   *Follow my channels and join my  groups for more updates*
  ╭────────────────
  │ *Wachannel:* https://whatsapp.com/channel/0029Vb7gOzV0QearPLCsEN2h
    
  │ *wagroup:*  https://chat.whatsapp.com/Ly7jKoR6iUY737502oEBIe

  │ *Telegram:*  https://t.me/PARSLEY-GLOBAL-TECHNOLOGIES
    
  │ *Contact owner:* https://wa.me/qr/263779715613

 ╰─────────────────── 
  `;

  // Prepare the image URL
  const image = {
    url: "https://files.catbox.moe/d27h3m.jpg"
  };

  // Prepare the message object
  const message = {
    image: image,
    caption: messageCaption
  };

  // Send the message
  await client.sendMessage(m.chat, message, { quoted: m });
};

