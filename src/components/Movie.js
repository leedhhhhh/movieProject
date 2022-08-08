import PropTypes from "prop-types";
import {Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({mediumCoverImage, title, year, summary, genres, id}) {
    // return (
    //     <div>
    //         <img src={mediumCoverImage} />
    //         <h2>
    //             <Link to={`/movie/${id}`}>{title}</Link>
    //         </h2>
    //         <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
    //         <ul>
    //             <li>
    //                 {genres.map((g) => (
    //                     <li key={g}>{g}</li>
    //                 ))}
    //             </li>
    //         </ul>
    //     </div>
    // );
    return (
        <div className={styles.movie}>
            <img src={mediumCoverImage} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired ,
    mediumCoverImage : PropTypes.string.isRequired ,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;