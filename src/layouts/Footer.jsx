/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

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
      if (window.pageYOffset > 150) {
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
      <div
        onClick={scrollTop}
        className={`${
          isVisible ? 'cursor-pointer' : '-rotate-90'
        } fixed p-1 right-2 bottom-24 sm:right-10 sm:bottom-16 md:right-16 lg:right-20`}
      >
        <div>
          {!isVisible ? (
            <span
              className={` ${
                !isVisible && 'translate-y-0 opacity-100'
              } text-white flex items-center gap-3 transition-all duration-700`}
            >
              <BsArrowLeft />
              scroll
            </span>
          ) : (
            <span
              className={`${
                isVisible && '-translate-x-5 opacity-100'
              } text-white flex items-center flex-col transition-all duration-700`}
            >
              top
            </span>
          )}
        </div>
      </div>
    </>
  )
}
