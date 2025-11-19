import Navbar from "./components/navigation/Navbar"
import NumResults from "./components/navigation/NumResults"

import Box from "./components/main/Box"
import MovieList from "./components/main/listBox/MovieList"
import Summary from "./components/main/watchedBox/Summary"
import WatchedList from "./components/main/watchedBox/WatchedList"

import StarRating from "./components/starComponent/StarRating"

import { tempWatchedData, tempMovieData } from "./assets/data"

import { useState } from "react"

const App = () => {
  const [movies, setMovies] = useState(tempMovieData)
  const [watched, setWatched] = useState(tempWatchedData)
  const [movieRating, setMovieRating] = useState(0)

  return (
    <>
      <StarRating maxRating={9} />
      <StarRating
        maxRating={5}
        messages={["terrible", "bad", "okay", "good", "amazing"]}
        defaultRating={3}
        onSetRating={setMovieRating}
      />
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
