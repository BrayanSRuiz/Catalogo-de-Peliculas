import { Link } from "react-router-dom"
import styles from "./MovieCard.module.css"

export const MovieCard = ( {movie} ) => {

  const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path
  return (
    <li className={styles.movieCard}>
      <Link to={"movie/" + movie.id}>
        <img
          className={styles.movieImage} 
          width={230}
          height={345}
          src={imageURL} 
          alt={movie.title} />
        <div>{movie.title}</div>
      </Link>
    </li>
  )
}
 