import Navbar from '../layouts/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Contact() {
  return (
    <>
      <div className='bg-zinc-800 text-white min-h-screen grid'>
        <Navbar />
        <div className='container mx-auto pb-20'>
          <form className='px-2 mx-auto max-w-xl font-poppins text-xs md:text-sm'>
            <h3 className='text-2xl md:text-3xl pb-8'>Contact Form</h3>
            <div className='sm:flex gap-4'>
              <Input
                id={'name'}
                placeholder={'Enter your name'}
                type={'text'}
                name={'Name'}
              />
              <Input
                id={'email'}
                placeholder={'Enter your name'}
                type={'text'}
                name={'Email'}
              />
            </div>
            <label htmlFor='message' className='flex flex-col pb-4'>
              <span className='py-2'>Message</span>
              <textarea
                id='message'
                cols='30'
                rows='2'
                placeholder='Enter your message'
                className='bg-zinc-700 px-3 py-2 rounded border-[1.3px] border-zinc-600'
              ></textarea>
            </label>
            <Button>Send</Button>
          </form>
        </div>
      </div>
    </>
  )
}
