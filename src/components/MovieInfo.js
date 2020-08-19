import React from 'react';

const MovieInfo = (props) => {
    return (
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 50}}>
                <i className="fas fa-arrow-left"></i>
                <span style={{marginLeft: 10}}>Go back</span>
            </div>
            <div className="row">
                <div className="col s12 m4">
                { 
                    props.currentMovie.Poster === "N/A" ? <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"} alt="Card image" style={{width: "100%", height:360}} /> : <img src={`${props.currentMovie.Poster}`} alt="Card image" style={{width: "100%", height:360}} /> 
                }
                </div>
                <div className="col s12 m8">
                <div className="info-container">
                    <p> {props.currentMovie.Title}</p>
                    <p> Type: {props.currentMovie.Type.charAt(0).toUpperCase() + props.currentMovie.Type.slice(1)}</p>
                    <p> Release Year: {props.currentMovie.Year}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MovieInfo;