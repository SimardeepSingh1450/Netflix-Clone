import React from 'react';
import Row from './Row';
import "./App.css";
import requests from './requests_1';
import Banner from'./Banner_3';
import Nav from './nav_4';

function App() {
  return (
    <div className="app">
      <Nav/>
      < Banner />
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     
     
    </div>
  );
}

export default App;
//Special NoTE-> The JS Component Files names must start with a CAPITAL Letter just for convention and the JS module files must start with small letter.