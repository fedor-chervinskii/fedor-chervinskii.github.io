export const IMAGES = {
  projects: {
    project1: '/images/projects/project1.jpeg',
    project2: '/images/projects/project2.png',
    project3: '/images/projects/project3.png',
  },
  profile: {
    avatar: '/images/profile/avatar.jpeg',
  },
  icons: {
    github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    linkedin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    email: 'https://api.iconify.design/material-symbols:mail.svg',
  },
} as const; 

console.log('IMAGES object:', IMAGES); // Debug log 