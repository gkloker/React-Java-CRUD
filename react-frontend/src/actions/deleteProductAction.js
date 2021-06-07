import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR
} from '../types';
import clientAxios from "../config/axios";
import Swal from "sweetalert2";

// Delete products
export function deleteProductAction (id) {
  return async (dispatch) => {
    dispatch(deleteProduct(id));
    try {
      await clientAxios.delete(`/users/${id}`);

      dispatch(deleteProductSuccess());

      // Alert
      Swal.fire({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success'
      })

    } catch (error) {
      console.log(error);

      dispatch(deleteProductError(error));
    }
  }
}

const deleteProduct = (id) => ({
  type: DELETE_USER,
  payload: id
})

// Delete product from database
const deleteProductSuccess = () => ({
  type: DELETE_USER_SUCCESS
})

// If there are an error
const deleteProductError = () => ({
  type: DELETE_USER_ERROR,
  payload: true
})
