import { NavLink } from "react-router-dom";
// NavLink receives a 'active' class by default
export const Navbar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    }

  }

  return (
    <nav className="primary-nav">
      <NavLink style={NavLinkStyles} to='/'>Home</NavLink>
      <NavLink style={NavLinkStyles} to='/about'>About</NavLink>
      <NavLink style={NavLinkStyles} to='/products'>Products</NavLink>
    </nav>
  )
}
