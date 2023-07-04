import React, { useState, useEffect } from 'react'

const NotFound = () => {
  const messages = [
    'Looks so empty...',
    'Where did everything go?',
    'Oops! Nothing to see here.',
    'Seems like we got lost too!',
    'The page vanished into thin air.'
  ]

  const [randomMessage, setRandomMessage] = useState('')

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length)
    setRandomMessage(messages[randomIndex])
  }, [])

  return (
    <section className="w-full mt-20 h-[60vh] mb-10 md:mb-[150px] flex justify-center items-center flex-col gap-8">
      <div>
        <h1 className="text-5xl md:text-7xl text-center text-bold">
          404 - Page Not Found
        </h1>
      </div>
      <div>
        <h1>{randomMessage}</h1>
      </div>
    </section>
  )
}

export default NotFound
