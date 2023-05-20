/* eslint-disable react/prop-types */
export default function Button(props) {
  return (
    <button
      {...props}
      className='flex items-center font-sans shadow-md shadow-black/10 text-sm gap-1 rounded px-4 bg-sky-500 text-white py-2'
    >
      {props.children}
    </button>
  )
}
