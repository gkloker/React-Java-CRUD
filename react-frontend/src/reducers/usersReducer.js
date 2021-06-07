import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  GET_EDIT_PRODUCTS,
  EDIT_PRODUCTS_SUCCESS,
  EDIT_PRODUCTS_ERROR
} from '../types';

// Any redurcer has its own state
const initialState = {
  products: [],
  error: null,
  loading: false,
  productDelete: null,
  productEdit: null
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_USER:
    case GET_USERS:
      return {
        ...state,
        loading: true
      }
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      }
    case ADD_USER_ERROR:
    case GET_USERS_ERROR:
    case DELETE_USER_ERROR:
    case EDIT_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      }
    case DELETE_USER:
      return {
        ...state,
        productDelete: action.payload
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        products: state.products.filter( product => product.id !== state.productDelete),
        productDelete: null
      }
    case GET_EDIT_PRODUCTS:
      return {
        ...state,
        productEdit: action.payload
      }
    case EDIT_PRODUCTS_SUCCESS:
      return {
        ...state,
        productEdit: null,
        products: state.products.map( product =>
          product.id === action.payload.id ?
            product = action.payload :
            product
         )
      }
    default:
      return state;
  }
}