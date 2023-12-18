import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder=" search products"></input>
      </div>
      <nav>
        {/* relative lnks dont use slash  */}
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
        {/* Absolute links like following will not work because ot will search from root*/}
        {/* <Link to='/featured'>Featured</Link> */}
        {/* it will work this way */}
        {/* <Link to='/products/new'>New</Link> */}
      </nav>
      <Outlet />
    </>
  )

}
