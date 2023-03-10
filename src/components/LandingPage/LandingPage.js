import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
// import client from '../../client'
import './LandingPage.css'
import Card from "../Card/Card";

const LandingPage = () => {
  const [searchInp, setSearchInp] = useState();
  const [searchData, setSearchData] = useState([]);
  // const [isClicked, setIsClicked] = useState(false);
  const [error, setError] = useState(false)
  // let { Search } = searchData

  // useEffect = (() => {
  //   console.log("useeffect called");
  //   getSearchData()
  // }, [isClicked])

  const handleSearch = async () => {
    setError(false)
    await axios.get(`http://www.omdbapi.com/?apikey=e789ba40&s=${searchInp.replace(" ", "+")}`).then((response) => {
      if (response.data.Error) {
        setError(true)
        setSearchData([])
      } else {
        setSearchData(response.data.Search)
        console.log(searchData);
      }
    })
  }


  return (
    <div>
      <Nav />
      <div className="container bg-black px-5 mx-5 mt-4 ">
        <div className="d-flex justify-content-center" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {
            setSearchInp(e.target.value)
          }} />
          <button className="btn btn-outline-success" onClick={handleSearch}>Search</button>
        </div>
      </div>
      {searchInp && <div className={error ? "error" : "success"}>{error ? `No movie found for ${searchInp}` : `Movie results for ${searchInp}`}</div>}
      <div className="mt-4 bg-black">
        <div className="row gap-3 justify-content-center ">
          {searchData.map((item) => (<Card movieData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
