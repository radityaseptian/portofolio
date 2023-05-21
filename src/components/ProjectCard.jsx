/* eslint-disable react/prop-types */
import { BiGitRepoForked } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'

export default function ProjectCard({
  image,
  title,
  children,
  build,
  hrefDemo,
  hrefRepo,
  id,
}) {
  function refference(params) {
    const [ref, inView, entry] = useInView()
  }

  return (
    <div className='mb-20 translate-y-20 duration-700 transition-all' ref={id}>
      <img src={image} alt={title} title={title} />
      <div className='py-4'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl md:text-2xl text-white'>{title}</h3>
          <div className='flex items-center gap-1 md:gap-2 self-start'>
            <a
              href={hrefRepo}
              className='hover:bg-black/50 bg-black/30  rounded-md px-3 py-2 text-white'
            >
              <BiGitRepoForked className='h-5 w-5' />
            </a>
            <a
              href={hrefDemo}
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
  )
}
