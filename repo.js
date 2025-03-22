module.exports = async (context) => {
  const { client, m } = context;

  try {
    // Fetch repository data from GitHub
    const response = await fetch("https://api.github.com/repos/Berabruce/BERA-MD");
    const repoData = await response.json();

    // Extract relevant information
    const repoInfo = {
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      lastUpdate: repoData.updated_at,
      owner: repoData.owner.login,
      createdAt: repoData.created_at,
      url: repoData.html_url
    };

    // Format dates
    const createdDate = new Date(repoInfo.createdAt).toLocaleDateString("en-GB");
    const lastUpdateDate = new Date(repoInfo.lastUpdate).toLocaleDateString("en-GB");

    // Construct message caption
    const messageCaption = `
      *Hello ,,,👋 This is 𝐏-𝐆𝐋𝐎-𝐓𝐄𝐐-𝐌𝐃*
      The best bot in the universe developed by 𝐏𝐚𝐫𝐬𝐥𝐞𝐲. Fork and give a star 🌟 to my repo
      ╭───────────────────
      │✞ *Stars:* ${repoInfo.stars}
      │✞ *Forks:* ${repoInfo.forks}
      │✞ *Release Date:* ${createdDate}
      │✞ *Last Update:* ${lastUpdateDate}
      │✞ *Owner:* ${repoInfo.owner}
      │✞ *Repository:* ${repoInfo.url}
      ╰───────────────────
    `;

    // Send the generated message to the user
    await client.sendMessage(m.chat, {
      text: messageCaption,
      contextInfo: {
        mentionedJid: [m.sender], // Mention the sender
        externalAdReply: {
          title: "🌟 𝐏𝐀𝐑𝐒𝐋𝐄𝐘𝐆𝐋𝐎𝐁𝐓𝐄𝐂𝐇-𝐌𝐃 ✨",
          body: "𝐏-𝐆𝐋𝐎-𝐓𝐄𝐐",
          sourceUrl: "https://whatsapp.com/channel/0029Vb7gOzV0QearPLCsEN2h",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

  } catch (error) {
    console.error("Error:", error);
    m.reply('An unexpected error occurred while generating the repo information.');
  }
};
