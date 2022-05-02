//TIP TO START->Use the snippet rfce


import React ,{useEffect, useState} from 'react';


import axios from './axios_2';
import "./Row.css";


const base_url2="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png";
const base_url="https://image.tmdb.org/t/p/original/";//Images for posters source


//Here below in the title,fetchUrl we used props destructuring
function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);//useState Hook used.
    
    
    
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);//This axios.get appends the requests URL to base URL i.e firstly baseURL then requests URL. 
            //console.log(request);
            console.log(request.data.results);
            setMovies(request.data.results);//This request .data.results is the array of movies.
            return request;//In this return request with API Linked to base URL , to see what data is returned to us, see console with inspect and then under data then under results see what data is returned from the API Request or we can say we can see this API Request result in our console also as we used the ->console.log(request).
            //We can also write -> console.log(request.data.results) to see the results as mentioned in above line with ease in our console tab.
        }
        fetchData();
    },[fetchUrl]);//If we are putting [] in [](dependency list) ,because then this useEffect line of code runs only once when the row loads.
  //SPECIAL NOTE->Whenever we are using any  variable inside useEffect which is passed from outside the {} of useEffect then we put that variable inside the dependency list[] because our useEffect is dependent on that variable.
  
 
 // console.log(movies);Used this line of code to see if movies variable now has movies array or not.
    
        
  return (
    <div className="row">
        {/*title->Here put NETFLIX ORIGINALS ,trending,etc*/}
        <h2>{title}</h2>
        
        <div className="row_posters">
            
        {/*Several row posters inside this */}
        {movies.map(movie=>(
            [
            <img key={movie.id}  className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}  alt={movie.name}/>,//NOTE->In this line of code we used key property which is a speciality of React to load large amount of media at a faster rate.
            <div><img className={`row_poster ${"row_posterLarge2"}`} src={`${base_url2}`} alt={movie.name}/>
            </div>            
            ]
            ))}
        </div>
        
        

    </div>
  );
}

export default Row;