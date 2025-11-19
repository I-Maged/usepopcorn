import Logo from "./Logo"
import SearchBar from "./SearchBar"
const Navbar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      {children}
    </nav>
  )
}

export default Navbar
