
import {
  USER_ALL_ERROR,
  USER_ALL_LOADING,
  USER_ALL_SUCCESS,
  USER_CREATE_ERROR,
  USER_CREATE_LOADING,
  USER_CREATE_SUCCESS,
  USER_DELETE_ERROR,
  USER_DELETE_LOADING,
  USER_DELETE_SUCCESS,
  USER_GET_ERROR,
  USER_GET_LOADING,
  USER_GET_SUCCESS,
} from '../type/user'

const initialState = {
  users: [],
  loading: false,
  editUser: {},
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case USER_ALL_LOADING:
    case USER_CREATE_LOADING:
    case USER_DELETE_LOADING:
    case USER_GET_LOADING:
      return {
        ...state,
       loading: true,
       error: false
      };

    case USER_ALL_ERROR:
    case USER_CREATE_ERROR:
    case USER_DELETE_ERROR:
    case USER_GET_ERROR:
      return{
        ...state,
        loading: false,
        error: action.payload
      }

    case USER_ALL_SUCCESS:
      return{
        ...state,
        loading: false,
        error: false,
        users: action.payload
      }
    
    case USER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        users: [...state.users, action.payload],
      };
    
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        users: state.users.filter(user => user.id !== action.payload),
      };

    case USER_GET_SUCCESS:
      return{
        ...state,
        loading: false,
        error: false, 
        editUser: action.payload
      }

    default:
      return state;
  }
};

export default userReducer;