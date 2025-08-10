import { useState } from "react";
import Search from "./components/Search"


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="logo" className="logo" />
            <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hustle</h1>
          </header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
          <h1 className="text-white">{searchTerm}</h1>
        </div>
      </div>
    </main>
  )
}

export default App