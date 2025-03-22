import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "pin") {
    const start = new Date().getTime();
    await m.React('⚡');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `Pong: ${responseTime.toFixed(2)} ms 🎈`
            
            contextInfo: {

            externalAdReply: {

              title: "𝙿-𝙶𝙻𝙾-𝚃𝙴𝚀",

              body: "ωнαтѕαρρ ¢нαηηєℓ ѕтαℓкєя",

              sourceUrl: "https://whatsapp.com/channel/0029Vb7gOzV0QearPLCsEN2h",

              mediaType: 1,

            },

          },

        },;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping
