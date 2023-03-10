import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {

  const { imdbID } = useParams();
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState([]);

  const getResults = () => {
    try {
      axios.get(`http://www.omdbapi.com/?apikey=e789ba40&i=${imdbID}`).then((resp) => {
        setDetail(resp.data)
        console.log(resp.data);
      })
    } catch {

    }
  }

  useEffect(() => {
    console.log(imdbID);
    getResults()
  }, [])
  return <div className="container bg-black pt-5">
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-4">
          <img src={detail.Poster} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h2 className="card-title mt-3">{detail.Title}</h2>
            <p className="card-text fs-4">Director : {detail.Director}</p>
            <p className="card-text fs-5">Actors : {detail.Actors}</p>
            <p className="card-text fs-5">Plot : {detail.Plot}</p>
            <p className="card-text fs-6 "><small className="text-muted">imDB Rating : {detail.imdbRating}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Detail;
