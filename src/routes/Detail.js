import { useCallback, useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import SelectMovie from "../components/SelectMovie";
import {Link } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [selectMovie , setSelectMovie] = useState();
    
    const getMovie = useCallback(async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setSelectMovie(json.data.movie);
        setLoading(false);
        console.log(json.data.movie)
    }, [id])

    useEffect(() => {
        getMovie();
    }, [getMovie])

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
            <div>
                <h2>
                <Link to={`/`}>Home</Link>
                </h2>
                <SelectMovie
                    key={id}
                    mediumCoverImage={selectMovie.medium_cover_image}
                    title={selectMovie.title}
                    summary={selectMovie.description_full}
                    genres={selectMovie.genres}
                />
            </div>
            }
        </div>
    )
}

export default Detail;