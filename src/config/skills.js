import html from '../../src/assets/skills/html.svg'
import css from '../../src/assets/skills/css.svg'
import js from '../../src/assets/skills/js.svg'
import react from '../../src/assets/skills/react.svg'
import tailwind from '../../src/assets/skills/tailwind.svg'
import node from '../../src/assets/skills/nodejs.png'
import express from '../../src/assets/skills/express.svg'
import vite from '../../src/assets/skills/vite.svg'
import mongo from '../../src/assets/skills/mongo.svg'
import linux from '../../src/assets/skills/linux.svg'
import git from '../../src/assets/skills/git.svg'
import vscode from '../../src/assets/skills/vscode.svg'
import postman from '../../src/assets/skills/postman.png'
import npm from '../../src/assets/skills/npm.svg'
export const skills = [
  {
    name: 'Language',
    values: [
      {
        icon: html,
        title: 'HTML',
      },
      {
        icon: css,
        title: 'CSS',
      },
      {
        icon: js,
        title: 'Javascript',
      },
    ],
  },
  {
    name: 'Framework/Library',
    values: [
      {
        icon: react,
        title: 'React.js',
      },
      {
        icon: tailwind,
        title: 'TailwindCSS',
      },
      {
        icon: node,
        title: 'Node.js',
      },
      {
        icon: express,
        title: 'Express.js',
      },
    ],
  },
  {
    name: 'Databases',
    values: [
      {
        icon: mongo,
        title: 'MongoDB',
      },
    ],
  },
  {
    name: 'Tools',
    values: [
      {
        icon: linux,
        title: 'Linux',
      },
      {
        icon: git,
        title: 'Git',
      },
      {
        icon: vite,
        title: 'Vite',
      },
      {
        icon: vscode,
        title: 'Visual Studio Code',
      },
      {
        icon: postman,
        title: 'Postman',
      },
      {
        icon: npm,
        title: 'Node Package Manager',
      },
    ],
  },
]
