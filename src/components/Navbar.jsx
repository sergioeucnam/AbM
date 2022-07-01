import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-bg-dark p-3" to='/'>ABM</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link text-bg-dark p-3 display-1" aria-current="page" to='/postulantes/listapostulantes'>Listar postulantes</Link>
                            <Link className="nav-link text-bg-dark p-3 display-1" to='/postulantes/creapostulante'>Registrar postulante</Link>
                            <Link className="nav-link text-bg-dark p-3 display-1" to='/postulantes/actualizapostulante'>Actualizar postulante</Link>
                            <Link className="nav-link text-bg-dark p-3 display-1" to='postulantes/listapostulante/:idpostulante'>Buscar postulante</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar