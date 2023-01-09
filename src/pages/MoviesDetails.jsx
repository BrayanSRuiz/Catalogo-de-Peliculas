import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "../components/Spinner"
import { get } from "../utils/httpsClient"
import styles from './MovieDetails.module.css'

export const MovieDetails = () => {
  const {movieId} = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect (() => {
    setIsLoading(true)
    get("movie/" + movieId).then((data) => {
      setMovie(data)
      console.log(data)
      setIsLoading(false)
    })
  }, [movieId])

  if (isLoading) {
    return <Spinner />
  }
  const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path
  return (
    <div className={styles.moviesDetails}>
      <div className={styles.colum}>
        <img className={styles.moviesImage} src={imageURL} alt={movie.title} />
      </div>
      <div className={styles.colum}>
        <p className={styles.title}>Title: {movie.title}</p>
        <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
        <p>Description: {movie.overview}</p>
      </div>
    </div>
  )
}