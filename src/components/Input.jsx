/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from 'react'

export const Input = forwardRef((props, ref) => {
  return (
    <label htmlFor={props.id} className='flex gap-2 flex-col flex-1 py-2'>
      <span className='text-white'>{props.nama}</span>
      <input
        ref={ref}
        {...props}
        className='bg-black/10 px-3 py-2 rounded border-[1.3px] border-primary/40 invalid:border-red-600'
      />
    </label>
  )
})
