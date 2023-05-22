/* eslint-disable react/prop-types */
import Navbar from './Navbar'
import HeaderContent from '../components/HeaderContent'
import BgHeader from '../components/BgHeader'

export default function Header({ home, title, description }) {
  return (
    <header className='min-h-screen grid bg-primary bg-gradient-to-t from-[#0A192F] to-black/30 relative'>
      <Navbar />
      <HeaderContent home={home} title={title} description={description} />
      <BgHeader />
    </header>
  )
}
