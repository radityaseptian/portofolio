import zeitplan from '../assets/projects/zeitplan.png'
import shiganime from '../assets/projects/shiganime.png'
import portofolio from '../assets/projects/portofolio.png'
import blog from '../assets/projects/blog.png'

export const projects = [
  {
    title: 'Shiganime Streaming Anime',
    description: 'Website application to streaming all anime what you want',
    build: 'React.js, TailwindCSS, Public Api, Vite',
    image: shiganime,
    hrefRepo: 'https://github.com/radityaseptian/shiganime',
    hrefDemo: 'https://shiganime-en.vercel.app/',
  },
  {
    title: 'The Zeitplan',
    description:
      'Slicing website design figma into landing page website,this website using design codedesign.dev',
    build: 'React.js, TailwindCSS, Vite',
    image: zeitplan,
    hrefRepo: 'https://github.com/radityaseptian/landing-page',
    hrefDemo: 'https://zeitplan-rho.vercel.app/',
  },
  {
    title: 'Personal Website',
    description: 'Personal Website To Introduce Myself',
    build: 'React.js, TailwindCSS, Vite',
    image: portofolio,
    hrefRepo: 'https://github.com/radityaseptian/portofolio',
    hrefDemo: 'https://radityaseptian.my.id/',
  },
  {
    title: 'Personal Blogs Website',
    description: 'A Simple Web To Write And Share My Articles About Technology',
    build: 'React.js, Tailwind, Vite, Express.js, MongoDB',
    image: blog,
    hrefRepo: '#',
    hrefDemo: '#',
  },
]
