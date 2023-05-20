/* eslint-disable react/prop-types */
import { BiGitRepoForked } from 'react-icons/bi'
import { GrShare } from 'react-icons/gr'

export default function ProjectCard({
  image,
  title,
  children,
  build,
  hrefDemo,
  hrefRepo,
}) {
  return (
    <div className='text-zinc-400 mb-20'>
      <img src={image} alt={title} title={title} />
      <div className='py-4'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl text-white'>{title}</h3>
          <div className='flex items-center gap-1'>
            <a
              href={hrefRepo}
              className='hover:bg-zinc-800 rounded-md px-3 py-2 text-white'
            >
              <BiGitRepoForked />
            </a>
            <a
              href={hrefDemo}
              className='hover:bg-zinc-800 rounded-md px-3 py-2'
            >
              <GrShare className='icon' />
            </a>
          </div>
        </div>
        <p className='py-4 md:py-5 text-sm md:text-base flex flex-col'>
          <span className='text-white'>Description:</span>
          <span>{children}</span>
        </p>
        <p className='text-sm md:text-base flex flex-col'>
          <span className='text-white'>Tech stack:</span>
          <span>{build}</span>
        </p>
      </div>
    </div>
  )
}
