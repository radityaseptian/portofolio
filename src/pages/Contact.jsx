/* eslint-disable no-undef */
import Navbar from '../layouts/Navbar'
import { Input } from '../components/Input'
import Button from '../components/Button'
import PopUp from '../components/PopUp'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [wait, setWait] = useState(false)
  const [warning, setWarning] = useState('')
  const [succes, setSucces] = useState(false)
  const [error, setError] = useState(false)
  const nama = useRef()
  const email = useRef()
  const message = useRef()
  // endpoint getform.io, replace to your endpoint
  const url = 'https://getform.io/f/e8958e2d-450d-4dd5-8d4d-e67dbdd18110'

  const handleSubmit = (e) => {
    e.preventDefault()
    setWait(true)
    if (
      nama.current.value.length >= 2 &&
      email.current.value.length >= 5 &&
      message.current.value.length >= 2
    ) {
      setWarning('')
      const formData = new FormData()
      formData.append('name', nama.current.value)
      formData.append('email', email.current.value)
      formData.append('message', message.current.value)
      fetch(url, {
        method: 'POST',
        body: formData,
      })
        .then((res) => {
          if (res.ok || res.status == 200) {
            setSucces(true)
            nama.current.value = ''
            email.current.value = ''
            message.current.value = ''
            setTimeout(() => {
              setSucces(false)
            }, 3000)
          } else {
            setError(true)
            setTimeout(() => {
              setError(false)
            }, 3000)
          }
        })
        .finally(() => setWait(false))
    } else {
      setWarning('Please fill in all the fields correctly!')
      setWait(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='bg-primary relative text-white min-h-screen grid bg-gradient-to-t from-[#0c1829] to-black/30'>
        {succes && <PopUp icon={AiOutlineCheck}>Success!</PopUp>}
        {error && <PopUp icon={AiOutlineClose}>Error!</PopUp>}
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
                  ref={nama}
                  id='name'
                  name='name'
                  placeholder='Enter your name'
                  type='text'
                  nama='Name'
                />
                <Input
                  ref={email}
                  id='email'
                  placeholder='Enter your email'
                  type='email'
                  nama='Email'
                />
              </div>
              <label htmlFor='message' className='flex flex-col pb-4'>
                <span className='py-2 text-white'>Message</span>
                <textarea
                  ref={message}
                  name='message'
                  cols='30'
                  rows='2'
                  placeholder='Enter your message'
                  className='bg-black/10 px-3 py-2 rounded border-[1.3px] border-primary/40'
                ></textarea>
              </label>
              <div className='flex items-center gap-4'>
                <Button type={!wait ? 'submit' : undefined}>
                  {wait ? 'Wait...' : 'Send'}
                </Button>
                <span className='text-white'>{warning}</span>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
