/* eslint-disable react/prop-types */
import { animation } from '../config/string'
import { useState, useEffect } from 'react'

export default function HeaderAnimation({ description }) {
  let delay = 0
  let value = animation(description)
  const [initAnimation, setInitAnimation] = useState(true)
  useEffect(() => {
    setInitAnimation(false)
  }, [])
  return (
    <div className='text-lg md:text-xl gap-[6px] text-secondary'>
      {value.map((item) => {
        delay += 100
        return (
          <div
            key={item}
            style={{
              transitionDelay: `${delay}ms`,
              transitionTimingFunction: 'ease-out',
            }}
            className={
              initAnimation
                ? 'transition-all duration-500 opacity-0 translate-y-20 md:translate-y-28 inline-block'
                : 'transition-all duration-500 opacity-100 translate-y-0 inline-block px-[3px]'
            }
          >
            {item}{' '}
          </div>
        )
      })}
    </div>
  )
}
