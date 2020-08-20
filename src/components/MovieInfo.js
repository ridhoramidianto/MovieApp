import React from 'react';

const MovieInfo = (props) => {
    return (
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 50}}>
                <i className="fas fa-arrow-left"></i>
                <span style={{marginLeft: 10}}>Go back</span>
            </div>
            <div className="row">
                <div className="col s12 m4 offset-m2" style={{marginBottom: 30}}>
                { 
                    props.currentMovie.Poster === "N/A" ? <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"} alt="Card image" style={{width: "100%", height:360}} /> : <img src={`${props.currentMovie.Poster}`} alt="Card image" style={{width: "100%", height:560}} /> 
                }
                </div>
                <div className="col s12 m6">
                <div className="info-container">
                    <p className="flow-text"> {props.currentMovie.Title}</p>
                    <p className="flow-text"> Type: {props.currentMovie.Type.charAt(0).toUpperCase() + props.currentMovie.Type.slice(1)}</p>
                    <p className="flow-text"> Release Year: {props.currentMovie.Year}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MovieInfo;