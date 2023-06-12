import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import about from '../assets/about.png'
import Activities from '../components/Activities'
import ButtonSkills from '../components/ButtonSkils'
import { skills } from '../config/skills'
import { useState } from 'react'
import Card from '../components/Card'
import RefreshToTop from '../components/RefreshToTop'

export default function About() {
  const [show, setShow] = useState('Language')
  const getName = (name) => {
    setShow(name)
  }

  return (
    <>
      <RefreshToTop />
      <div className='bg-zinc-800 text-white'>
        <Header
          title={'About Who I Am'}
          description={'Want To Know More About Me?'}
        />
        <section className='md:px-8 px-4 pt-20 pb-10 md:pt-28 bg-primary/70'>
          <div className='container max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl text-center'>
              Know Who <span>I&apos;m</span>
            </h2>
            <div className='flex flex-col md:flex-row pt-10'>
              <div className='[&>p]:py-3 text-base md:text-lg'>
                <p className='leading-8'>
                  Hi Everyone, I am <span>Raditya M. Septian</span> from{' '}
                  <span>Bekasi, Indonesia.</span> I am a junior full stack
                  website developer, but I&apos;m more skilled at frontend.
                </p>
                <p>
                  My interest is to become a <span>fullstackweb developer</span>
                  . I believe through constant practicing, I will achieve my
                  dream.
                </p>
                <p>
                  Apart from coding, some other activities that I love to do!
                </p>
                <ul>
                  <Activities>Watch movies</Activities>
                  <Activities>Playing Chess Online</Activities>
                  <Activities>Writing Tech Blogs</Activities>
                </ul>
              </div>
              <center className='max-w-md self-center pt-3'>
                <img src={about} alt='About' />
              </center>
            </div>
          </div>
        </section>
        <section className='bg-primary/70 pb-36 md:px-8 px-4 border-b-8 border-primary'>
          <div className='container max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl'>Skills</h2>
            <div>
              <ul className='py-6 flex flex-wrap gap-2'>
                {skills.map((item) => {
                  return (
                    <li key={item.name}>
                      <ButtonSkills
                        className={
                          show == item.name ? 'bg-[#623686]' : 'bg-transparent'
                        }
                        onClick={() => getName(item.name)}
                      >
                        {item.name}
                      </ButtonSkills>
                    </li>
                  )
                })}
              </ul>
              <ul className='flex flex-wrap gap-4 justify-center md:justify-normal'>
                {show === 'Language' &&
                  skills[0].values.map((item, i) => {
                    return (
                      <li key={i}>
                        <Card icon={item.icon} title={item.title} />
                      </li>
                    )
                  })}
                {show === 'Framework/Library' &&
                  skills[1].values.map((item, i) => {
                    return (
                      <li key={i}>
                        <Card icon={item.icon} title={item.title} />
                      </li>
                    )
                  })}
                {show === 'Databases' &&
                  skills[2].values.map((item, i) => {
                    return (
                      <li key={i}>
                        <Card icon={item.icon} title={item.title} />
                      </li>
                    )
                  })}
                {show === 'Tools' &&
                  skills[3].values.map((item, i) => {
                    return (
                      <li key={i}>
                        <Card icon={item.icon} title={item.title} />
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
