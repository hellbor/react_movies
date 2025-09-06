import React from "react";
import Preloader from '../components/Preloader.js';
import MovieList from '../components/MovieList.js';
import Search from "../components/Search.js";
import './Main.css';

class Main extends React.Component {
    state = { movies: [] }
    componentDidMount() {
        fetch('https://omdbapi.com/?apikey=7bf125ca&s=resident_evil')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    searchMovie = (str) => {
        this.setState({ loading: true })
        fetch(`https://omdbapi.com/?apikey=7bf125ca&s=${str}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    render() {
        return (
            <div className="main">
                <div className="wrap">
                    <Search searchMovie={this.searchMovie} />
                    {
                        this.state.movies.length ? <MovieList movies={this.state.movies} /> : <Preloader />
                    }
                </div>
            </div>
        )
    }
}
export default Main;