/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BiGitRepoForked } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function ProjectCard({
  image,
  title,
  children,
  build,
  hrefDemo,
  hrefRepo,
}) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className='mb-20' data-aos='fade-up'>
        <img src={image} alt={title} title={title} loading='lazy' />
        <div className='py-4'>
          <div className='flex justify-between items-center'>
            <h3 className='text-xl md:text-2xl text-white'>{title}</h3>
            <div className='flex items-center gap-1 md:gap-2 self-start'>
              <a
                href={hrefRepo}
                target='_blank'
                rel='noreferrer'
                className='hover:bg-black/50 bg-black/30  rounded-md px-3 py-2 text-white'
              >
                <BiGitRepoForked className='h-5 w-5' />
              </a>
              <a
                href={hrefDemo}
                target='_blank'
                rel='noreferrer'
                className='hover:bg-black/50 bg-black/30 rounded-md px-3 py-2 text-white flex items-center gap-2'
              >
                open
                <BsArrowRight className='icon h-4 w-4' />
              </a>
            </div>
          </div>
          <p className='py-4 md:py-5 flex flex-col'>
            <span className='text-white'>Description:</span>
            <span className='text-secondary'>{children}</span>
          </p>
          <p className='flex flex-col'>
            <span className='text-white'>Tech Stack:</span>
            <span className='text-secondary'>{build}</span>
          </p>
        </div>
      </div>
    </>
  )
}
