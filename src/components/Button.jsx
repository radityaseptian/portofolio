/* eslint-disable react/prop-types */
export default function Button(props) {
  return (
    <button
      {...props}
      className='flex items-center font-sans shadow-md shadow-black/10 text-sm gap-1 rounded px-6 bg-[#623686] hover:bg-secondary/60 text-white py-2'
    >
      {props.children}
    </button>
  )
}
