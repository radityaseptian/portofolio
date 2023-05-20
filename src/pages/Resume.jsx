import Navbar from '../layouts/Navbar'
import Button from '../components/Button'
import { AiOutlineDownload } from 'react-icons/ai'

export default function Resume() {
  return (
    <>
      <div className='bg-zinc-800 text-white min-h-screen'>
        <Navbar />
        <div className='py-6 px-2 container max-w-6xl mx-auto'>
          <center>
            <Button>
              Download
              <AiOutlineDownload />
            </Button>
          </center>
          <div className='p-6'>{/* PDF RESUME */}</div>
          <center>
            <Button>
              Download
              <AiOutlineDownload />
            </Button>
          </center>
        </div>
      </div>
    </>
  )
}
