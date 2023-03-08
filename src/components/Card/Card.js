import React from 'react'

const Card = ({ movieData }) => {
    return (
        <div className="cards">
            <img src={movieData.Poster} alt="" className="img-fluid img" />
            <div className="content">
                <div className="fs-4 fw-bold mb-4">{movieData.Title}</div>
                <div className="fs-6">{movieData.Year}</div>
                <div className="fs-5">{movieData.Type}</div>
            </div>
            <button>Know More</button>
        </div>
    )
}

export default Card