import Navbar from "./components/navigation/Navbar"
import ListBox from "./components/main/listBox/ListBox"
import WatchedBox from "./components/main/watchedBox/WatchedBox"

import { useState } from "react"

import { tempMovieData } from "./assets/data"

const App = () => {
  const [movies, setMovies] = useState(tempMovieData)

  return (
    <>
      <Navbar movies={movies} />
      <main className="main">
        <ListBox movies={movies} />
        <WatchedBox />
      </main>
    </>
  )
}

export default App
