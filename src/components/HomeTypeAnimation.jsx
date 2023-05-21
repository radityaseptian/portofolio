import { TypeAnimation } from 'react-type-animation'

export default function HomeTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        'Junior Full Stack Web Developer',
        4000,
        'MERN Stack',
        2000,
        'Software Enthusiast',
        2000,
      ]}
      wrapper='span'
      cursor={true}
      repeat={Infinity}
      className='text-xl md:text-2xl md:pl-1 text-primary'
    />
  )
}
