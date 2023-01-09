import { useEffect, useState } from "react"
import { get } from "../utils/httpsClient"
import { MovieCard } from "./MovieCard"
import { Spinner } from "./Spinner"
import styles from './MoviesGrid.module.css'

export const MoviesGrid = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect (() => {
    setIsLoading(true)
    get("discover/movie").then((data) => {
      setMovies(data.results)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => 
          <MovieCard key={movie.id} movie={movie}/>
        )}
      </ul>
    </div>
  )
}