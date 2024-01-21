import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <NavLink to={'/'}>User Form</NavLink>
      <NavLink to={'/users'}>User List</NavLink>
      {/* <ul>
        <li>
          <Link to={'/'}>User Form</Link>
        </li>
        <li>
          <Link to={'/users'}>User List</Link>
        </li>
      </ul> */}
    </nav>
  )
}

export default NavBar