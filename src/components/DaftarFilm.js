import React from 'react'
import Filem from './Filem';

const DaftarFilm = (props) => {
    return (
    <div className = "container">
        <div className="row">

            <div className="col s12 offset-l1">
                {
                    props.movies.map((movie, i) => {
                        return (
                            <Filem key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.imdbID} image={movie.Poster} />
                        )
                    })
                }
            </div>
        
        </div>
    </div>
    )
}

export default DaftarFilm;