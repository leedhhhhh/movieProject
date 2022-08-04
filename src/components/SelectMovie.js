import PropTypes from "prop-types";

function SelectMovie({mediumCoverImage, title, summary, genres}) {
    return (
        <div>
            <img alt="" src={mediumCoverImage} />
            <h2>{title}</h2>
            <p>{summary}</p>
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

SelectMovie.propTypes = {
    mediumCoverImage : PropTypes.string.isRequired ,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectMovie;