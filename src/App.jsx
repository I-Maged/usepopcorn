import Navbar from "./components/navigation/Navbar"
import NumResults from "./components/navigation/NumResults"

import Box from "./components/main/Box"
import MovieList from "./components/main/listBox/MovieList"
import Summary from "./components/main/watchedBox/Summary"
import WatchedList from "./components/main/watchedBox/WatchedList"

import { tempWatchedData, tempMovieData } from "./assets/data"

import { useState } from "react"

const App = () => {
  const [movies, setMovies] = useState(tempMovieData)
  const [watched, setWatched] = useState(tempWatchedData)

  return (
    <>
      <Navbar>
        <NumResults movies={movies} />
      </Navbar>
      <main className="main">
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </main>
    </>
  )
}

export default App
