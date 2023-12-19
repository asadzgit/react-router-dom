import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
// NavLink receives a 'active' class by default
export const Navbar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    }
  }

  const auth = useAuth()

  return (
    <nav className="primary-nav">
      <NavLink style={NavLinkStyles} to='/'>Home</NavLink>
      <NavLink style={NavLinkStyles} to='/about'>About</NavLink>
      <NavLink style={NavLinkStyles} to='/products'>Products</NavLink>
      <NavLink style={NavLinkStyles} to='/profile'>Profile</NavLink>
      {!auth.user && (
        <NavLink style={NavLinkStyles} to='/login'>
          Login
        </NavLink>
      )}
    </nav>
  )
}
