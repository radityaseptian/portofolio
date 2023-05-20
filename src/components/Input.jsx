/* eslint-disable react/prop-types */
export default function Input({ type, placeholder, name, id }) {
  return (
    <label htmlFor='name' className='flex gap-2 flex-col flex-1 py-2'>
      <span>{name}</span>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className='bg-zinc-700 px-3 py-2 rounded border-[1.3px] border-zinc-600'
      />
    </label>
  )
}
