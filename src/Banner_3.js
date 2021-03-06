import React, { useEffect, useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

import axios from './axios_2';
import requests from './requests_1';
import "./Banner.css"

function Banner_3() {
    const[movie,setMovie]=useState([]);

useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(requests.fetchTrending);
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
        return request;
    }
    fetchData();
},[]);

console.log(movie);


  return (
    <header className="banner"
    style ={{
        backgroundSize:"cover",
        backgroundImage:`url(
            "https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            
        backgroundPosition:"center center"

    }}
    >
        <div className="banner_contents">

        {/*title*/}
        <h1 className="banner_title">
            {movie.title||movie.name||movie.original_name}
        </h1>
        {/*div with 2 buttons*/}
        <div className="banner_buttons">
            <button className="banner_button"><FontAwesomeIcon icon={faPlay} style={{marginRight:'15px'}} />Play</button>
            <button className="banner_button"><FontAwesomeIcon icon={faLayerGroup} style={{marginRight:'15px'}} />My List</button>
        </div>

        {/*Description*/}
        <h1 className="banner_description">
            {movie.overview}
        </h1>
        

        </div>
        <div className="banner--fadeBottom"/>
    </header>
     
  )



}



export default Banner_3;