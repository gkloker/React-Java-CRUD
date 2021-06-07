import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR
} from '../types';
import clientAxios from "../config/axios";

// Get products
export function getProductAction () {
    return async (dispatch) => {
        dispatch(getUsers());

        try {
            // Consult API
            const rest = await clientAxios.get('/users');

            // If it is ok, update the state
            dispatch(getUsersSuccess(rest.data))
        } catch (error) {
            console.log(error);
            dispatch(getUsersError(error))
        }
    }
}


const getUsers = () => ({
    type: GET_USERS
})

// If products gets from database
const getUsersSuccess = (products) => ({
    type: GET_USERS_SUCCESS,
    payload: products
})

// If there are an error
const getUsersError = () => ({
    type: GET_USERS_ERROR,
    payload: true
})