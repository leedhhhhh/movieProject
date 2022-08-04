import PropTypes from "prop-types";
import {Link } from "react-router-dom";

function Movie({mediumCoverImage, title, summary, genres, id}) {
    return (
        <div>
            <img src={mediumCoverImage} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul>
                <li>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </li>
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired ,
    mediumCoverImage : PropTypes.string.isRequired ,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;