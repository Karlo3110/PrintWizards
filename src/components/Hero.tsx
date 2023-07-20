import 'index.css'

const Hero: React.FC = () => {
  return (
    <div className="w-[full] h-[84vh] pattern-tech flex justify-center items-center flex-col">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium select-none">
        PrintWizards
      </h1>
      <p className="text-2xl md:text-3xl lg:text-4xl select-none">
        Transforming Your Ideas into Prints
      </p>
      <div className="flex justify-center items-center flex-wrap mt-4">
        <button className="text-sm md:text-xl lg:text-xl rounded-full bg-sky-400 border hover:bg-sky-200 border-black h-8 md:h-10 w-auto text-center pl-4 pr-4 mr-2 ml-2">
          Contact Us
        </button>
        <button className="text-sm md:text-xl lg:text-xl rounded-full bg-white hover:bg-sky-200 border border-black h-8 md:h-10 w-auto text-center pl-4 pr-4 mr-2 ml-2">
          Discord
        </button>
      </div>
    </div>
  )
}

export default Hero
