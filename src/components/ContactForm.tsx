import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form: any = useRef()
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
          setIsFormSubmitted(true)
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section className="w-full mt-20 h-[60vh] mb-10 md:mb-[150px] flex justify-center items-center">
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex justify-center items-center flex-col min-w-[280px] w-[280px] md:w-[350px] h-auto border-2 rounded-md bg-white border-black p-4 gap-4 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]">
          <h1 className="text-center font-extralight text-4xl">Contact Us</h1>

          <input
            className="border border-black rounded-md h-[40px] w-full p-2"
            type="text"
            placeholder="Name"
            required
            id="Name"
            name="user_name"
          />

          <input
            className="border border-black rounded-md h-[40px] w-full p-2"
            type="email"
            placeholder="youremail@example.com"
            required
            id="Email"
            name="user_email"
          />

          <textarea
            className="border border-black rounded-md h-[150px] w-full p-2"
            placeholder="Your message..."
            minLength={20}
            maxLength={250}
            required
            id="Message"
            name="message"
          ></textarea>

          <button
            className="bg-white border-2 rounded-[8px] border-black transition ease-in-out delay-50 hover:-translate-y-1 hover:-translate-x-1 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] h-[40px] w-[70px]"
            type="submit"
            value="Send"
          >
            Send
          </button>

          {isFormSubmitted && (
            <p className="text-green-500 mt-4">Message successfully sent!</p>
          )}
        </div>
      </form>
    </section>
  )
}

export default ContactForm
