import axios from 'axios';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_ALL_CITIES = 'GET_ALL_CITIES';
export const GET_ALL_NEIGHORHOODS = 'GET_ALL_NEIGHORHOODS';
export const ADD_COUNTRY = 'ADD_COUNTRY';
export const ADD_CITY = 'ADD_CITY';
export const ADD_NEIGHORHOOD = 'ADD_NEIGHORHOOD';
// export const DELETE_USER = 'DELETE_USER'
//;


export const getAllUsers = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://postulanteapi-v1.herokuapp.com/postulantes/listapostulantes`);
        dispatch({ type: GET_ALL_USERS, payload: response.data.data });
    }
}
export const createNewUser = (user) => {
    return async (dispatch) => {
        const response = await axios.post(`https://postulanteapi-v1.herokuapp.com/postulantes/creapostulante/`, user);
        dispatch({ type: GET_ALL_USERS, payload: response.data });
    }
}

export const updateUser = (id) => {
    return async (dispatch) => {
        const response = await axios.post(`https://postulanteapi-v1.herokuapp.com/postulantes/creapostulante/`);
        dispatch({ type: UPDATE_USER, payload: response.data });
    }
}
// export const deleteUser = (id) => {
//     return async (dispatch) => {
//         // const response = await axios.delete(`https://postulanteapi-v1.herokuapp.com/postulantes/eliminapostulante/${id}`);
//         dispatch({ type: DELETE_USER, payload: id });
//     }
// }
export const getAllCountries = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://postulanteapi-v1.herokuapp.com/paises/listapaises`);
        dispatch({ type: GET_ALL_COUNTRIES, payload: response.data.data });
    }
}
export const getAllCities = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://postulanteapi-v1.herokuapp.com/ciudades/listaciudades`);
        dispatch({ type: GET_ALL_CITIES, payload: response.data.data });
    }
}
export const getAllNeighborhoods = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://postulanteapi-v1.herokuapp.com/barrios/listabarrios`);
        dispatch({ type: GET_ALL_NEIGHORHOODS, payload: response.data.data });
    }
}
export const addCountry = (country) => {
    return async (dispatch) => {
        const response = await axios.post(`https://postulanteapi-v1.herokuapp.com/paises/creapais/`, country);
        dispatch({ type: ADD_COUNTRY, payload: response.data });
    }
}
export const addCity = (city) => {
    return async (dispatch) => {
        const response = await axios.post(`https://postulanteapi-v1.herokuapp.com/ciudades/creaciudad/`, city);
        dispatch({ type: ADD_CITY, payload: response.data });
    }
}
export const addNeighborhood = (neighborhood) => {
    return async (dispatch) => {
        const response = await axios.post(`https://postulanteapi-v1.herokuapp.com/barrios/creabarrio/`, neighborhood);
        dispatch({ type: ADD_NEIGHORHOOD, payload: response.data });
    }
}