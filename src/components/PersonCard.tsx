import React from 'react'
import placeholderImage from '../assets/images/placeholder.jpg'
import githubImage from '../assets/images/github-mark.png'

type PersonCardProps = {
  url: string
  name: string
  surname: string
  description: string
  github: string
}

const PersonCard: React.FC<PersonCardProps> = (props) => {
  return (
    <div className="rounded h-auto w-[300px] flex justify-start items-center flex-col">
      <div className="rounded-full shadow-lg h-[200px] w-[200px]">
        <img
          className="rounded-full"
          src={props.url ? props.url : placeholderImage}
          alt={`${props.name} ${props.surname}`}
        />
      </div>
      <div className="pl-4 pr-4 flex flex-wrap justify-center items-center flex-col pt-4">
        <div>
          <h1 className="text-2xl">
            {props.name} {props.surname}
          </h1>
        </div>
        <div>
          <p className="text-lg">{props.description}</p>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <div>
            {props.github ? (
              <a href={props.github} target="_blank" rel="noopener noreferrer">
                <img src={githubImage} className="w-8" alt="GitHub" />
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonCard
