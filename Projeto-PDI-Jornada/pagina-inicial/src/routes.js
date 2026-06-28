import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importando direto da biblioteca

import Home from './pages/Home'; // Caminho de acesso ao arquivo na rota
import Avaliacoes from './pages/Avaliacoes'; // Caminho de acesso ao arquivo na rota
import Erro from './pages/Erro'; // Caminho de página não encontrada

import Header from './components/Header'; // Caminho de acesso ao header das páginas

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/Avaliacoes" element={ <Avaliacoes/> }/>
                <Route path="*" element={ <Erro/> } /> 
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;