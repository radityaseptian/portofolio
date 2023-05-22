/* eslint-disable react/prop-types */
export default function Card({ icon, title }) {
  return (
    <div className='w-28 h-24 bg-zinc-900/70 rounded-md shadow-sm shadow-black/50 hover:-translate-y-2 transition-all duration-200'>
      <img
        src={icon}
        alt={title}
        title={title}
        loading='lazy'
        className='h-full w-full p-2 px-4'
      />
    </div>
  )
}
