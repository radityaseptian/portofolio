import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import avatar from '../assets/avatar.svg'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='text-white bg-zinc-800'>
        <Header home={true} title={'RADITYA M. SEPTIAN'} />
        <section className='bg-primary/70 pt-20 pb-28 md:py-28 border-b-8 border-primary'>
          <div className='container max-w-6xl mx-auto px-4 md:px-8'>
            <h2 className='text-3xl md:text-4xl text-center'>
              Let Me <span>Introduce</span> Myself
            </h2>
            <div className='md:flex py-10 md:py-12 gap-8'>
              <div className='[&>p]:py-3 text-base md:text-lg'>
                <p>
                  I&apos;m excited if i have something related to{' '}
                  <span>programming</span>
                </p>
                <p>
                  My field of interest&apos;s are building new{' '}
                  <span>web technologies</span>
                </p>
                <p>
                  Whenever possible, i also apply my passion for developing
                  products with <span>Node.js</span> and{' '}
                  <span>Modern Javascript Library and Frameworks</span> like{' '}
                  <span>React.js and Express.js</span>
                </p>
              </div>
              <center className='pt-8 md:p-0'>
                <img src={avatar} alt='avatar' className='min-w-max' />
              </center>
            </div>
            <center>
              <h3 className='text-2xl md:text-3xl'>Find Me On</h3>
              <p className='text-sm pt-2 pb-6 md:text-base'>
                Feel free to <span>connect</span> with me
              </p>
              <div className='flex gap-8 justify-center'>
                <a
                  href='/#'
                  // target='_blank'
                  // rel='noreferrer'
                >
                  <FaFacebookF className='cursor-pointer w-5 h-5 bg-[#3b5998] hover:rounded-xl rounded-md box-content p-2' />
                </a>
                <a
                  href='https://www.linkedin.com/in/raditya-septian-3a9768277/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GrLinkedinOption className='cursor-pointer w-5 h-5 bg-[#0e76a8] hover:rounded-xl rounded-md box-content p-2' />
                </a>
                <a
                  href='https://github.com/radityaseptian'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiOutlineGithub className='cursor-pointer w-5 h-5 bg-black hover:rounded-xl rounded-md box-content p-[8.7px]' />
                </a>
              </div>
              <p className='py-5'>radityaseptian1551@gmail.com</p>
            </center>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
