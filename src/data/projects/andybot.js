import AndyBot from '../../images/AndyBot-logo.jpg';
import AndyBotUi from '../../images/andybot-ui.jpg';
import { TechIcon } from '../../utils/techToIcon.map';

export const projectAndyBot = {
  ProjectHeader: {
    title: 'AndyBot - Just another Discord bot',
    publishDate: '2023',
    tags: 'Backend, Node.js, Typescript, Github, Discord, Discord.js, ffmpeg,',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'AndyBot - Just another Discord bot',
      img: AndyBot,
    },
    {
      id: 2,
      title: 'AndyBot UI',
      img: AndyBotUi,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'About Client',
    CompanyInfo: [
      {
        id: 1,
        title: 'Name',
        details: 'AndyRum',
      },
      {
        id: 2,
        title: 'Services',
        details: 'Hobby Project',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails: `The objective of the AndyBot project was to create a discord bot that could play music in a voice channel based on user requests. The aim was to provide an alternative to the previously used Hydra bot, which had shut down its music player functionality.`,
    Technologies: {
      title: 'Tools & Technologies',
      techs: [
        TechIcon.nodejs,
        TechIcon.typescript,
        TechIcon.npm,
        TechIcon.github,
        TechIcon.discord,
      ],
    },
    ProjectDetailsHeading: 'Challenge & Solution',
    ProjectDetails: [
      {
        id: 1,
        details: `After checking the discord bot developer docs, I decided to use TypeScript to build the bot. While creating the bot on the platform and setting up the local development environment was easy, I faced a new challenge when it came to handling music. I had never used any sound processing library or software before, but I knew I wanted to be able to stream music from YouTube and potentially Spotify in the future. I soon discovered that I could stream the music to my bot server and use the Discord SDK to join a voice channel and play sounds. However, I needed a way to process the incoming stream from YouTube and convert it to a compatible format in real-time. After conducting research, I found that ffmpeg could help me with this task.`,
      },
      {
        id: 2,
        details: `After researching Discord bot developer documentation, I decided to write AndyBot in TypeScript. Setting up the local development environment was straightforward, but the project quickly became more challenging when it came to sound processing. I had no prior experience with sound processing libraries or software, but I knew that I wanted to use YouTube as a source for music playback, and possibly Spotify in the future. Through further research, I discovered that I could stream music to my bot server and use the Discord SDK to join voice channels and play sounds. With the help of ffmpeg, I was able to process the incoming stream from YouTube, convert it to mp3, and send it to the Discord server in real-time.`,
      },
      {
        id: 3,
        details: `After the initial version was complete, I asked friends to test AndyBot and received numerous bug reports and feature requests. These included the ability to add whole playlists from YouTube, global volume control, skip music, pause music, stop the player, have AndyBot leave the voice channel when everyone else left, and have permissions over AndyBot. I also added extra chat commands for dice rolling (as my friends are huge D&D fans), role management on the Discord server, and the ability to clear messages completely from a channel. While my friends have asked for the source code, streaming music can be complicated in legal terms, so the bot's source code is closed and AndyBot is only available on my friends' Discord server.`,
      },
    ],
  },
};
