/* eslint-disable react/prop-types */
import HomeTypeAnimation from './HomeTypeAnimation'
import HeaderAnimation from './HeaderAnimation'

export default function HeaderContent({
  home = false,
  title1,
  title2,
  description,
}) {
  return (
    <div className='px-4 sm:mx-auto mb-28 md:mb-20'>
      {home && <span className='pl-1'>Hi, i am</span>}
      <div>
        <h1 className='text-5xl lg:text-6xl leading-[3.3rem] pb-4 md:pt-1'>
          <span>{title1}</span>
          <span>{title2}</span>
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
