import { NavLink } from "react-router-dom";
// NavLink receives a 'active' class by default
export const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
    </nav>
  )
}
