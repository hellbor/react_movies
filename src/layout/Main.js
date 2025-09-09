import React from "react";
import Preloader from '../components/Preloader.js';
import MovieList from '../components/MovieList.js';
import Search from "../components/Search.js";
import './Main.css';

class Main extends React.Component {
    state = { movies: [], loading:false, type:"all" }
    componentDidMount() {
        fetch('https://omdbapi.com/?apikey=7bf125ca&s=resident_evil')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    searchMovie = (str, type = 'all') => {
        this.setState({ loading: true })
        fetch(`https://omdbapi.com/?apikey=7bf125ca&s=${str}${type !== 'all' ? `&type=${type}`:''}`)
            .then(response => response.json())
            .then
            (
                data => 
                {
                    if(data.Response === "True")this.setState({ movies: data.Search, loading:false });
                    else this.setState({movies:[], loading:false});
                }
            )
    }
    // searchMovie = (str, type = 'all') =>
    // {
    //     this.setState({loading:true})
    //     fetch(`https://omdbapi.com/?apikey=94dbc433&s=${str.trim()}${type !== 'all' ? `&type=${type}` : ''}`)
    //     .then(response => response.json())
    //     .then
    //     (
    //         data => 
    //         {
    //             if(data.Response === "True")this.setState({movies: data.Search, loading:false});
    //             else this.setState({movies:[], loading:false});
    //         }
    //     )
        
    //         // this.setState({loading:false});
    // }
    render() {
        return (
            <div className="main">
                <div className="wrap">
                    <Search searchMovie={this.searchMovie} />
                    {
                        !this.state.loading && this.state.movies.length ? <MovieList movies={this.state.movies} /> : <Preloader />
                    }
                </div>
            </div>
        )
    }
}
export default Main;