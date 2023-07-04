import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <div className="w-full h-[80px] flex justify-between items-center z-20 bg-transparent shadow-md">
      <div className="ml-4 md:ml-[20%] flex items-center gap-2">
        <h1 className="text-black font-normal tracking-widest md:text-[20px]">
          PrintWizards
        </h1>
      </div>
      <div className="flex items-center font-extralight text-black mr-4 gap-4 md:mr-[20%]  md:text-[20px]">
        <NavLink
          to="/"
          className={
            location.pathname === '/'
              ? 'underline underline-offset-2 decoration-1'
              : ''
          }
        >
          <h1>Home</h1>
        </NavLink>
        <NavLink
          to="/projects"
          className={
            location.pathname === '/projects'
              ? 'underline underline-offset-2 decoration-1'
              : ''
          }
        >
          <h1>Projects</h1>
        </NavLink>
        <NavLink
          to="/contact"
          className={
            location.pathname === '/contact'
              ? 'underline underline-offset-2 decoration-1'
              : ''
          }
        >
          <h1>Contact</h1>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
