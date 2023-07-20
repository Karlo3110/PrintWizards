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
    <section className="w-full h-[80vh] flex justify-center items-center flex-col gap-8 not-found-bg">
      <div>
        <h1 className="text-5xl md:text-8xl text-center text-bold">
          404 - Page Not Found
        </h1>
      </div>
      <div>
        <h1 className="text-3xl">{randomMessage}</h1>
      </div>
    </section>
  )
}

export default NotFound
