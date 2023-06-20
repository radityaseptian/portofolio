import zeitplan from '../assets/projects/zeitplan.png'
import shiganime from '../assets/projects/shiganime.png'
import portofolio1 from '../assets/projects/portofolio.png'
import portofolio2 from '../assets/projects/portofoliov2.png'
import blog from '../assets/projects/blog.png'

export const projects = [
  {
    title: 'Personal Blogs Website',
    description: 'A Simple Web To Write And Share My Articles About Technology',
    build: 'React.js, Tailwind, Express.js, MongoDB',
    image: blog,
    hrefRepo: 'https://github.com/radityaseptian/blog',
    hrefDemo: 'https://radwritter.vercel.app/',
  },
  {
    title: 'Shiganime Streaming Anime',
    description: 'Website application to streaming all anime what you want',
    build: 'React.js, TailwindCSS, Public Api',
    image: shiganime,
    hrefRepo: 'https://github.com/radityaseptian/shiganime',
    hrefDemo: 'https://shiganime-en.vercel.app/',
  },
  {
    title: 'The Zeitplan',
    description:
      'Slicing website design figma into landing page website,this website using design codedesign.dev',
    build: 'React.js, TailwindCSS',
    image: zeitplan,
    hrefRepo: 'https://github.com/radityaseptian/landing-page',
    hrefDemo: 'https://zeitplan-rho.vercel.app/',
  },
  {
    title: 'Personal Website V2',
    description: 'Personal Website To Introduce Myself',
    build: 'React.js, TailwindCSS',
    image: portofolio2,
    hrefRepo: 'https://github.com/radityaseptian/portofolio.v2',
    hrefDemo: 'https://radityaseptian.my.id/',
  },
  {
    title: 'Personal Website V1',
    description: 'Personal Website To Introduce Myself',
    build: 'React.js, TailwindCSS',
    image: portofolio1,
    hrefRepo: 'https://github.com/radityaseptian/portofolio',
    hrefDemo: 'https://radityaseptian.vercel.app/',
  },
]
