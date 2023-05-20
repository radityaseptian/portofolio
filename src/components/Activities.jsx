/* eslint-disable react/prop-types */
import {MdKeyboardArrowRight} from 'react-icons/md'
export default function Activities({children}) {
  return (
    <li className='flex gap-2 items-center'>
      <MdKeyboardArrowRight />
      {children}
    </li>
  )
}