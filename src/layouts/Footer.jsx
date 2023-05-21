/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      <div onClick={scrollTop} className='bg-black/50 fixed bottom-2 right-14'>
        <div>scroll</div>
      </div>
    </>
  )
}
