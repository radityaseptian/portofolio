/* eslint-disable no-unused-vars */
import { navLists } from '../config/navLists'
import NavItem from '../components/NavItem'
import { Link, useLocation } from 'react-router-dom'
import NavItemMobile from '../components/NavItemMobile'

export default function Navbar() {
  let location = useLocation()
  let delay = 0
  return (
    <nav>
      <div className='container mx-auto'>
        <div className='hidden sm:flex justify-between items-center h-20 px-4 lg:px-10 font-poppins'>
          <p className='font-semibold text-xl md:text-2xl text-primary'>
            <Link to='/'>Rms.</Link>
          </p>
          <ul className='flex gap-4 md:gap-6 lg:gap-8 text-sm lg:text-base overflow-hidden'>
            {navLists.map((item) => {
              delay += 100
              return (
                <NavItem key={item.name} delay={delay} icon={item.icon} href={item.href}>
                  {item.name}
                </NavItem>
              )
            })}
          </ul>
        </div>
        <div className='sm:hidden fixed w-full bottom-0 shadow-white bg-zinc-800 z-20 shadow-xl'>
          <ul className='flex items-center justify-between gap-1 border-t-[1px] border-zinc-500'>
            {navLists.map((item) => {
              return (
                <NavItemMobile
                  href={item.href}
                  key={item.name}
                  icon={item.icon}
                  className={location.pathname == item.href && 'bg-black/50'}
                >
                  {item.name}
                </NavItemMobile>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
