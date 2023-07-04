import PersonCard from './PersonCard'

const About = () => {
  const people = [
    {
      url: 'https://scontent.fzag4-1.fna.fbcdn.net/v/t1.6435-9/75462255_2977817032245763_8201956989127884800_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t23PXSZDChUAX9RS2fi&_nc_ht=scontent.fzag4-1.fna&oh=00_AfCUHGk_cdk6eqHh8TM4xuJgbg_D-XIQqpR1rB6i_desSA&oe=64CBF427',
      name: 'Karlo',
      surname: 'Starčević',
      description: 'CEO',
      github: 'https://github.com/Karlo3110'
    },
    {
      name: 'Hrvoje',
      surname: 'Marić',
      description: 'CEO',
      github: ''
    }
  ]

  return (
    <div className="container mx-auto flex justify-center items-center pb-20 pt-20 w-full flex-col">
      <div className="flex justify-center items-center flex-wrap flex-col pb-12 w-[80%] ">
        <div>
          <h1 className="text-5xl pt-4 pb-4">About</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          possimus, dolore praesentium veritatis animi adipisci iure porro est,
          aut voluptatum, eveniet maiores id pariatur officiis! Maxime minus
          adipisci ut atque.
        </p>
      </div>
      <div className="flex justify-center items-start gap-[25px] flex-wrap ">
        {people.map((person) => (
          <PersonCard
            url={person.url}
            name={person.name}
            surname={person.surname}
            description={person.description}
            github={person.github}
          />
        ))}
      </div>
    </div>
  )
}

export default About
