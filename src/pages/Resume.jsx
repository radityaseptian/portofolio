import Navbar from '../layouts/Navbar'
import Button from '../components/Button'
import { AiOutlineDownload } from 'react-icons/ai'
import RefreshToTop from '../components/RefreshToTop'
import img from '/Raditya-CV.png'

export default function Resume() {
  return (
    <>
      <RefreshToTop />
      <div className='bg-primary text-white min-h-screen bg-gradient-to-t from-[#0A192F] to-black/30'>
        <Navbar />
        <section className='border-b-8 border-primary min-h-screen'>
          <div className='py-6 pb-20 sm:pb-6 px-2 container max-w-5xl mx-auto'>
            <center>
              <a
                href='/Raditya-CV.pdf'
                target='_blank'
                rel='noopener noreferrer'
                download
              >
                <Button>
                  Download
                  <AiOutlineDownload />
                </Button>
              </a>
            </center>
            <div className='py-6'>
              <img src={img} alt='Loading PDF...' />
            </div>
            <center>
              <a
                href='/Raditya-CV.pdf'
                target='_blank'
                rel='noopener noreferrer'
                download
              >
                <Button>
                  Download
                  <AiOutlineDownload />
                </Button>
              </a>
            </center>
          </div>
        </section>
      </div>
    </>
  )
}
