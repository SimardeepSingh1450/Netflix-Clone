const API_KEY="a73a1ca9228705c652878a6834f27787";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`

}
/*Info about these above URL's:
1.These above links before API KEY are the endings of a URL.
2.We are linking these ends of url with api_key wherever these links were asking for it.
3.At the end the genres are the genre ID's of netflix.
*/
export default requests;

