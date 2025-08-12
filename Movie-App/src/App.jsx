import { useState, useEffect} from "react";
import Search from "./components/Search"
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import {useDebounce} from 'react-use';
import { updateSearchCount, getTrendingMovies } from "./appwrite";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMBD_API;
const API_OPTIONS = {
  method: "GET",
  headers: {
accept: "application/json", 
    Authorization: `Bearer ${API_KEY}`,
}
}
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [erroMeassage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [trendingMovies, setTrandingMovies] = useState([]);

useDebounce(()=> setDebouncedSearchTerm(searchTerm), 500 ,[searchTerm])

  const fetchMovies = async (query = '') => {
    setLoading(true);
    setErrorMessage("");
    setMovieList([]);
   try{
    const endpoint = 
    query ? 
    `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
    `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint, API_OPTIONS);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    if(data.Response === "False") { 
    setErrorMessage(data.Error || "An error occurred while fetching movies.");
    setMovieList([]);
    return;
    }

    setMovieList(data.results || []);
    setErrorMessage("");

      if(query && data.results.length > 0){
        await updateSearchCount(query,data.results[0]);
      }

  

   }catch(error) {
     console.error("Error fetching movies:", error);
     setErrorMessage("Failed to fetch movies. Please try again later.");

   } finally {
    setLoading(false);
   }
  }
  const loadTrendingMovies = async ()=>{
    try{
      const movies = await getTrendingMovies();
      setTrandingMovies(movies);
    }catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
    loadTrendingMovies();
  },[])

  useEffect(() => {
  fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="logo" className="logo" />
            <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hustle</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
          </header>

          {trendingMovies.length > 0 && (
            <section className="trending">
              <h2>Trending Movies</h2>
              <ul>
                  {trendingMovies.map((movie,index)=>(
                    <li key={movie.$id}>
                      <p>{index + 1}</p>
                      {/* Log poster_url for debugging */}
                      {console.log('Trending poster_url:', movie.poster_url)}
                      <img 
                        src={movie.poster_url ? movie.poster_url : '/no-movie.png'} 
                        alt={movie.title} 
                        onError={e  => { e.target.onerror=null; e.target.src='/no-movie.png'; }}
                      />
                    </li>
                  ))}
              </ul>
            </section>
          )}

          <section className="all-movies">
            <h2 >All Movies</h2>
           {
           loading ? (
            <Spinner/>
           ) : erroMeassage? (
             <p className="text-red-500">{erroMeassage}</p>
           ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </ul>
           )  }
          </section>
        </div>
      </div>
    </main>
  )
}

export default App