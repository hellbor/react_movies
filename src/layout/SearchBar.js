import React, { useState } from 'react';
import './SearchBar.css';
import Movie from '../components/Movie';
import MovieList from '../components/MovieList';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { length: 40 };
    }

    reset = () => {
        this.setState({ length: 40 });
    }

    render() {
        return (
            <form>
                <h3>Поиск фильма</h3>
                <input type="text" placeholder="Введите название фильма..." size={this.state.length} />
                <button onClick={this.search}>Поиск</button>
            </form>

        )
    }
}
export default SearchBar;

// const SearchBar = () => {
//     return (
//         <form>
//             <input type="text" placeholder="Поиск..." />
//             <button type="submit">Поиск</button>
//         </form>
//     )
// }
// export default SearchBar; 