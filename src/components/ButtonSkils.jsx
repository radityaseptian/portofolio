/* eslint-disable react/prop-types */
export default function Button(props) {
  const { className = 'bg-transparent', children } = props

  return (
    <button
      {...props}
      className={`${className} font-sans shadow shadow-black/20 text-sm gap-1 rounded px-4 text-white py-2`}
    >
      {children}
    </button>
  )
}
