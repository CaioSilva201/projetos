import { Link } from 'react-router-dom';
import './erro.css';

function Erro(){
    return(
        <div className="not-found">
            <h1>Error 404</h1>
            <h2>Page Not Found...</h2>
            <Link to={"/"}>Veja a lista de filmes</Link>
        </div>
    )
}

export default Erro;