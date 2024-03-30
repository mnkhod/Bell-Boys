import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className='flex justify-center py-[25px]'>
      <div className='text-nav-box'>
        <NavLink to={'/'} className={({ isActive }) => isActive ? "text-active-nav" : "text-nav"}>Home</NavLink>
      </div>
      <div className='text-nav-box'>
        <NavLink to={'/gallery'} className={({ isActive }) => isActive ? "text-active-nav" : "text-nav"}>Gallery</NavLink>
      </div>
      <div className='text-nav-box'>
        <NavLink to={'/about'} className={({ isActive }) => isActive ? "text-active-nav" : "text-nav"}>About</NavLink>
      </div>
    </div>
  )
}
