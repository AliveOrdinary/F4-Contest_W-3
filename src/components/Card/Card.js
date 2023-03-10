import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import { PATHS } from '../../paths'

const Card = ({ movieData }) => {

    const navigate = useNavigate();
    return (
        <div className="cards col-2 text-center d-flex flex-column justify-content-around " key={movieData.imdbID}>
            <img src={movieData.Poster} alt="" className="img-fluid img" />
            <div className="content align-content-center p-2">
                <div className="fs-5 fw-semibold mt-2 mb-2 text-light">{movieData.Title}</div>
                <div className="fs-6 mb-2 text-light">{movieData.Year}</div>
                <div className="fs-5 mb-2 text-light">{movieData.Type}</div>
                <button className='' onClick={() => {
                    navigate(`${PATHS.MOVIE_DETAIL}${movieData.imdbID}`)
                }}>Know More</button>
            </div>
        </div>
    )
}

export default Card