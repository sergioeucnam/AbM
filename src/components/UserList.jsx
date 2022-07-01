import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../actions/actions';
// import { Link } from 'react-router-dom'
function UserList() {
    const allUsers = useSelector(state => state.users)
    const dispatch = useDispatch()
    function calcularEdad(fecha) {
        let today = new Date();
        let birthDay = new Date(fecha);
        let age = today.getFullYear() - birthDay.getFullYear();
        let m = today.getMonth() - birthDay.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate())) {
            age--;
        }

        return age;
    }

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>Nro</th>
                        <th scope='col'>Nombres</th>
                        <th scope='col'>Apellidos</th>
                        <th scope='col'>Documento</th>
                        <th scope='col'>Correo</th>
                        <th scope='col'>Telefono</th>
                        <th scope='col'>Direccion</th>
                        <th scope='col'>Pais</th>
                        <th scope='col'>Ciudad</th>
                        <th scope='col'>Barrio</th>
                        <th scope='col'>Edad</th>
                        <th scope='col'>Genero</th>
                        <th scope='col'>###</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map(user => (
                            <tr key={user.id_postulante}>
                                <th scope='row' className='lead'>{user.id_postulante}</th>
                                <th scope='row' className='lead'>{user.nombres}</th>
                                <th scope='row' className='lead'>{user.apellidos}</th>
                                <th scope='row' className='lead'>{user.nro_documento}</th>
                                <th scope='row' className='lead'>{user.email}</th>
                                <th scope='row' className='lead'>{user.telefono}</th>
                                <th scope='row' className='lead'>{user.direccion}</th>
                                <th scope='row' className='lead'>{user.id_pais}</th>
                                <th scope='row' className='lead'>{user.id_ciudad}</th>
                                <th scope='row' className='lead'>{user.id_barrio}</th>
                                <th scope='row' className='lead'>{calcularEdad(user.fecha_nacimiento)}</th>
                                <th scope='row' className='lead'>{user.sexo}</th>
                                {/* <Link to={`/postulantes/actualizapostulante/${user.id_postulante}`}> */}
                                <th>
                                    <button className='btn btn-primary disabled' aria-disabled="true" role="button" key={user.id_postulante}>Editar</button>
                                </th>
                                {/* </Link> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList