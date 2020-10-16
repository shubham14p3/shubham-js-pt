module.exports = {
  siteTitle: 'Shubham Raj | Software Engineer',
  siteDescription:
    'Shubham Raj is a software engineer based in Jharkhand, India who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Shubham Raj, Shubham, SRAJ, shubham14p3, software engineer, front-end engineer, web developer, javascript, northeastern, data scientist, software developer',
  siteUrl: 'https://www.shubhamraj.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shubham Raj',
  location: 'Jharkhand, IN',
  email: 'shubham14p3@gmail.com',
  github: 'https://github.com/shubham14p3',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shubham14p3',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shubham14p3',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/shubham14p3',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shubham12p3',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/shubham14p3',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
