import { useState } from "react"
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./components/MovieCard"

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=3fa3bdc0'

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
        console.log(data)
    }

    return (
        <div className="app">
            <h1>Movies Yayy!</h1>

            <div className="search">
                <input 
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt="search" onClickCapture={()=>{searchMovies(searchTerm)}}/>
                
            </div>

            <div className="container">
                { movies.length > 0 ?
                (movies.map((movie, index) => 
                    <MovieCard movie={movie} key={index}></MovieCard>
                )) : (
                    <h2>Walay salida nakit an</h2>
                )}
            </div>
        </div>
    )
}

export default App