import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai'
import { GrContact, GrDocumentText } from 'react-icons/gr'
import { ImBlog } from 'react-icons/im'
export const navLists = [
  {
    name: 'Home',
    href: '/',
    icon: AiOutlineHome,
  },
  {
    name: 'About',
    href: '/about',
    icon: AiOutlineUser,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: 'Blogs',
    href: 'https://radwritter.vercel.app/',
    icon: ImBlog,
  },
  {
    name: 'Resume',
    href: '/resume',
    icon: GrDocumentText,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: GrContact,
  },
]
