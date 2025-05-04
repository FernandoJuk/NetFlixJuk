import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className="logo" to="/">NETFLIX_JUK </Link>
            <div className="mennu">
            <Link className="favoritos" to="/favoritos">Meus Filmes </Link>
            <Link className="favoritos2" to="/movieslist">Pesquisar Filmes </Link>
            </div>
        </header> 
    )
}
export default Header;