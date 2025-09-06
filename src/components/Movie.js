import './Movie.css';
import SearchBar from '../layout/SearchBar';

function Movie(props)
{
    const {Title, Year, imdbID, Type, Poster} = props;
    return(
        <div className='card'>
                <img src={Poster} alt={imdbID} />
                <div>
                    <h3>{Title}</h3>
                    <p>{Year} {Type}</p>
                </div>
        </div>
    )
}
export default Movie;