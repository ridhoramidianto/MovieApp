import React from 'react';

const Movie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image === "N/A" ? <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'} alt="card image default" style={{ width: "100%", height: 360}} /> : <img src={`${props.image}`} alt="card image" style={{ width: "100%", height: 360}} />    
                    }
                </div>
                <div className="card-content">
                    <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;