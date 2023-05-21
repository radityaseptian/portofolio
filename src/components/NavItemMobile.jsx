/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function NavItemMobile({ href, children, icon: Icon,className }) {
  return (
    <li className='w-full'>
      <Link
        to={href}
        className={`${className} flex flex-col items-center justify-center pt-2 pb-1 hover:bg-black/50 rounded`}
      >
        <Icon className='icon w-5 h-5' />
        <span className='text-[.70rem] text-white'>{children}</span>
      </Link>
    </li>
  )
}
