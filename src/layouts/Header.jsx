/* eslint-disable react/prop-types */
import Navbar from './Navbar'
import HeaderContent from '../components/HeaderContent'

export default function Header({ home, title1, title2,description }) {
  return (
    <header className='min-h-screen grid bg-primary bg-gradient-to-t from-[#0A192F] to-black/30'>
      <Navbar />
      <HeaderContent home={home} title1={title1} title2={title2} description={description} />
    </header>
  )
}
