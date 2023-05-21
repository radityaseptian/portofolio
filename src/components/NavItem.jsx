/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function NavItem({ children, href, delay, icon: Icon }) {
  const [initAnimation, setInitAnimation] = useState(true)
  useEffect(() => {
    setInitAnimation(false)
  }, [])

  return (
    <li
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'ease-out',
      }}
      className={`${
        initAnimation ? 'opacity-0 translate-x-32' : 'opacity-100 translate-y-0'
      } group transition-all duration-500`}
    >
      <Link
        to={href}
        className="relative flex justify-center items-center gap-1 py-1 after:content-[''] after:absolute after:w-0 after:h-[.20rem] after:-bottom-[.020rem] after:bg-secondary group-hover:after:w-full after:rounded after:transition-all after:duration-500"
      >
        <Icon className='icon' />
        <span className='text-white'>{children}</span>
      </Link>
    </li>
  )
}
