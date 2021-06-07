import {
  GET_EDIT_USER,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR
} from '../types';
import clientAxios from "../config/axios";

// Get user to edit
export function getEditProductAction (user) {
  return async (dispatch) => {
    dispatch(getEditProduct(user));
  }
}
const getEditProduct = (user) => ({
  type: GET_EDIT_USER,
  payload: user
})

export function editUserAction(user) {
  return async (dispatch) => {
    dispatch(editProduct(user));

    try {
      await clientAxios.put(`/users/${user.id}`, user);

      dispatch(editProductSuccess(user))
    } catch (error) {
      console.log(error);

      dispatch(editProductError());
    }
  }
}

const editProduct = () => ({
  type: EDIT_USER,
})

// Edit from database
const editProductSuccess = (user) => ({
  type: EDIT_USER_SUCCESS,
  payload: user
})

// If there are an error
const editProductError = () => ({
  type: EDIT_USER_ERROR,
  payload: true
})