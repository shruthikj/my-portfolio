import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shruthi Krithika - Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Shruthi Krithika',
  subtitle: "I'm a Full Stack Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am Shruthi. I have 4+ years of professional experience as a Full Stack Software Engineer. I also hold a Masters in Computer Science from UTA. I recently interned at HealCo, a telemedicine startup, as a Full Stack Engineer. Prior to that, I worked at ZOHO building end-to-end modules for b2C, b2b and enterprise consumption on cloud. I am experienced in building Low-Code Platform applications.',
  paragraphTwo: 'My strong tech stack would be: Java, Python, JavaScript, React.js, TypeScript, HTML, CSS, MySql.',
  paragraphThree: 'Apart from my professional side, if I must describe myself, I am a thriller/horror movies aficionado. I love dancing, sketching, DIY projects and yoga. Off late I have gotten into a lot of baking because of the pandemic and the lockdown. :)',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
