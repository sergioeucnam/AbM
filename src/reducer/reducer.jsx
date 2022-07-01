import {
    GET_ALL_USERS, ADD_USER, UPDATE_USER, ADD_CITY, ADD_COUNTRY, ADD_NEIGHORHOOD, GET_ALL_CITIES, GET_ALL_COUNTRIES, GET_ALL_NEIGHORHOODS,
    //  DELETE_USER 
} from "../actions/actions";

const initialState = {
    users: [],
    countries: [],
    cities: [],
    neighorhoods: [],

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }

        case ADD_USER:
            return {
                ...state,
                users: [...state, action.payload]
            }
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload.id) {
                        // return action.payload

                    }
                    return user
                }
                )
            }
        // case DELETE_USER:
        //     return {
        //         ...state,
        //         users: state.users.filter(user => user.id !== action.payload)
        //     }
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_ALL_CITIES:
            return {
                ...state,
                cities: action.payload
            }
        case GET_ALL_NEIGHORHOODS:
            return {
                ...state,
                neighborhoods: action.payload
            }
        case ADD_COUNTRY:
            return {
                ...state,
                countries: [...state, action.payload]
            }
        case ADD_CITY:
            return {
                ...state,
                cities: [...state, action.payload]
            }
        case ADD_NEIGHORHOOD:
            return {
                ...state,
                neighborhoods: [...state, action.payload]
            }
        default:
            return state;
    }
}
export default rootReducer;