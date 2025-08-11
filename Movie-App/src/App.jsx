import { useState, useEffect} from "react";
import Search from "./components/Search"
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
 

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

  const fetchMovies = async (query = '') => {
    setLoading(true);
    setErrorMessage("");
    setMovieList([]);
   try{
    const endpoint = 
    query ? 
    `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&sort_by=popularity.desc` :
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

  

   }catch(error) {
     console.error("Error fetching movies:", error);
     setErrorMessage("Failed to fetch movies. Please try again later.");

   } finally {
    setLoading(false);
   }
  }

  useEffect(() => {
  fetchMovies(searchTerm);
  }, [searchTerm]);
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="logo" className="logo" />
            <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hustle</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
          </header>

          <section className="all-movies">
            <h2 className="mt-[40px]">All Movies</h2>
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