import Navbar from '../layouts/Navbar'
import Button from '../components/Button'
import { AiOutlineDownload } from 'react-icons/ai'
import { useEffect } from 'react'

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='bg-primary text-white min-h-screen bg-gradient-to-t from-[#0A192F] to-black/30'>
        <Navbar />
        <section className='border-b-8 border-primary min-h-screen'>
          <div className='py-6 px-2 container max-w-6xl mx-auto'>
            <center>
              <Button>
                Download
                <AiOutlineDownload />
              </Button>
            </center>
            <div className='py-6'>{/* PDF RESUME */}</div>
            <center>
              <Button>
                Download
                <AiOutlineDownload />
              </Button>
            </center>
          </div>
        </section>
      </div>
    </>
  )
}
