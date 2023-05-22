export default function name(props) {
  const { children, icon: Icon } = props

  return (
    <div className='absolute top-0 left-0 right-0 z-20'>
      <div className='flex w-32 gap-2 items-center mx-auto px-5 py-2 rounded bg-white'>
        <Icon className='bg-secondary rounded-sm box-content' />
        <span className='text-black'>{children}</span>
      </div>
    </div>
  )
}
