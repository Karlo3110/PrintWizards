import 'index.css'

import dragon from '../assets/images/dragonprint.jpg'
import warrior1 from '../assets/images/warriordnd1.jpg'
import warrior2 from '../assets/images/warriordnd2.jpg'
import dices from '../assets/images/dnddiceset.jpg'

const Gallery = () => {
  const galleryImages = [
    {
      name: 'Articulated dragon',
      src: dragon,
      alt: 'dragon',
      description: 'Resin print - Articulated Dragon',
      instagram: 'https://www.instagram.com/p/CuSA8tntVOj/',
      price: '15 €'
    },
    {
      name: 'Honorable Samurai',
      src: warrior1,
      alt: 'warrior1',
      description: 'Resin print - Warrior DND Figure',
      instagram: 'https://www.instagram.com/p/CuSA0JONwuX/',
      price: '7 €'
    },
    {
      name: 'Killer Shinobi',
      src: warrior2,
      alt: 'warrior2',
      description: 'Resin print - Ninja Warrior DND Figure',
      instagram: 'https://www.instagram.com/p/CuSA0JONwuX/',
      price: '7 €'
    },
    {
      name: 'DND Dice Set',
      src: dices,
      alt: 'dices',
      description: 'Resin print - Set of DND Dices',
      instagram: 'https://www.instagram.com/p/CuSA3gntyXL/',
      price: '10 - 20 €'
    }
  ]

  return (
    <div className="container mx-auto flex justify-center items-center w-full flex-col">
      <div className="mt-10 mb-10">
        <h1 className="text-5xl">Gallery</h1>
      </div>
      <div className="flex justify-center items-center flex-row flex-wrap gap-8">
        {galleryImages.length > 0
          ? galleryImages.map((image) => (
              <div
                key={image.alt}
                className="flex flex-col justify-center items-center w-[300px] md:w-[400px] m-4 gap-4"
              >
                <a
                  href={image.instagram}
                  target="_blank"
                  className=" hover:scale-[102%] transition-all"
                >
                  <img
                    className="rounded-md shadow-xl"
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                  ></img>
                </a>
                <div className="w-full flex flex-col justify-start items-start">
                  <h1 className="uppercase font-bold text-lg md:text-2xl">
                    {image.name}
                  </h1>
                  <p className="font-normal text-[rgba(0,0,0,0.8)] text-lg md:text-xl">
                    {image.description} - {image.price}
                  </p>
                </div>
              </div>
            ))
          : ''}
      </div>
    </div>
  )
}

export default Gallery
