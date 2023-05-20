/* eslint-disable react/prop-types */
export default function Card({ icon, title }) {
  return (
    <div className='w-28 h-24 bg-zinc-800 rounded-md shadow-sm shadow-black/50'>
      <img
        src={icon}
        alt={title}
        title={title}
        className='h-full w-full p-2 px-4'
      />
    </div>
  )
}
