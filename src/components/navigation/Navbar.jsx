import SearchBar from "./SearchBar"
import NumResults from "./NumResults"
import Logo from "./Logo"

const Navbar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <NumResults movies={movies} />
    </nav>
  )
}

export default Navbar
