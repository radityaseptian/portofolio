/* eslint-disable react/prop-types */
import HomeTypeAnimation from './HomeTypeAnimation'
import HeaderAnimation from './HeaderAnimation'

export default function HeaderContent({ home = false, title, description }) {
  return (
    <div className='px-4 sm:mx-auto mb-28 sm:mb-24 md:mb-20 z-10'>
      {home && <span className='pl-1 text-white'>Hi, my name is </span>}
      <div>
        <h1 className='text-5xl lg:text-6xl leading-[3.3rem] pb-4 md:pt-1 text-white'>
          {title}
        </h1>
      </div>
      {home ? (
        <HomeTypeAnimation />
      ) : (
        <HeaderAnimation description={description} />
      )}
    </div>
  )
}
