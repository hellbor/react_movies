import React from "react";
import Preloader from '../components/Preloader.js';
import MovieList from '../components/MovieList.js';
import './Main.css';

class Main extends React.Component 
{
    state = { movies: [] }
    componentDidMount()
    {
        fetch('https://omdbapi.com/?apikey=7bf125ca&s=matrix')
        .then(response => response.json())
        .then(data => this.setState({movies:data.Search}))
    }
    render() {
        return (
            <div className="main">
                <div className="wrap">
                    {
                        this.state.movies.length ? <MovieList movies={this.state.movies} /> : <Preloader />
                    }
                </div>
            </div>
        )
    }
}
export default Main;