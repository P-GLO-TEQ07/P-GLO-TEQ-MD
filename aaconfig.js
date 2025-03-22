import axios from 'axios';
import config from '../../config.cjs';

const quranVideo = async (m, gss) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const validCommands = ['menu', 'help', 'm'];

  if (validCommands.includes(cmd)) {
    const videoUrl = `https://bk9.fun/Islam/quranvid`;
await m.React('⏳'); // React with a loading icon
    await gss.sendMessage(
      m.from,
      {
        video: { url: videoUrl },
        caption: `*ᴘᴀʀsʟᴇʏ ᴀɪ*\n\n¢яєαтє∂ ву Ƥ𐀁ЯƧ˩ЄƳ`,
      },
      { quoted: m }
    );
  }
};

export default quranVideo;
