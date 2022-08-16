import styles from "./Card.module.scss";
import Oscar from "../assets/images/oscar-icon.png";
import { useEffect } from "react";

function MovieCard({movie}) {
  useEffect(() => {
    console.log(movie)
  }, [movie])
  return (
    <div className={styles.card}>
      <div className={styles.cardCover}></div>
      <div className={styles.cardInfos}>
        <h2>{movie.name}</h2>
        <p className={styles.movieTime}>{movie.runtimeInMinutes} min</p>
        <div className={styles.moviesOscars}>
          <img src={Oscar} alt="" />
          <p>
            {movie.academyAwardWins} Wins & {movie.academyAwardNominations} Nominations
          </p>
        </div>

        <div className={styles.budgetAndRevenue}>
          <div>
            <p className={styles.title}>Budget</p>
            <p>${movie.budgetInMillions}M</p>
          </div>
          <div>
            <p className={styles.title}>Revenue</p>
            <p>${movie.boxOfficeRevenueInMillions}M</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard