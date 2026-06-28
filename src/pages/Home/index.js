
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

// URL da API: https://api.themoviedb.org/3/movie/top_rated?api_key=fc5ec7f8ef39e33913ec95ce8e579411

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilmes() {
            const response = await api.get("movie/top_rated", {
                params:{
                    api_key: "fc5ec7f8ef39e33913ec95ce8e579411",
                    language: "en-US",
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10)); para puxar apenas 10 itens e trazendo a visualização no console.
            setFilmes(response.data.results.slice(0, 10));
            setLoading(false);
        }

        loadFilmes();

    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>
                                {filme.title}
                            </strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Home;