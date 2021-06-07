import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR
} from '../types';
import clientAxios from "../config/axios";
import Swal from "sweetalert2";

// Create new products
export function createNewProductAction (product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      // Insert on API
      await clientAxios.post('/users', product);

      // If it is ok, update the state
      dispatch(addProductSuccess(product));

      // Alert
      Swal.fire({
        title: 'Correct',
        text: 'The product was added successfully',
        icon: 'success'
      })
    } catch (error) {
      console.log(error);

      // If there are an error change the state
      dispatch(addProductError(true));

      // Alert
      Swal.fire({
        title: 'There are an error',
        text: 'There are an error, try again',
        icon: 'error'
      })
    }
  }
}

const addProduct = () => ({
  type: ADD_USER
})

// If the product save in the data base
const addProductSuccess = (product) => ({
  type: ADD_USER_SUCCESS,
  payload: product
})

// If there are an error
const addProductError = (error) => ({
  type: ADD_USER_ERROR,
  payload: error
})