import Navbar from '../layouts/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='bg-primary text-white min-h-screen grid bg-gradient-to-t from-[#0c1829] to-black/30'>
        <Navbar />
        <section className='border-b-8 border-primary'>
          <div className='container mx-auto pb-20'>
            <form
              onSubmit={handleSubmit}
              className='px-2 mx-auto max-w-xl font-poppins text-sm'
            >
              <h3 className='text-3xl md:text-4xl pb-8'>Contact Form</h3>
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
                <span className='py-2 text-white'>Message</span>
                <textarea
                  id='message'
                  cols='30'
                  rows='2'
                  placeholder='Enter your message'
                  className='bg-black/10 px-3 py-2 rounded border-[1.3px] border-primary/40'
                ></textarea>
              </label>
              <Button type='submit'>Send</Button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
