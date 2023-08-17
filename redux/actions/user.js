import clientAxios from "../../config/axios";
import { SweetAlertBasic } from "@/utils/components/sweet";
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
} from "../type/user";

// Actions to get all users
export const initAllUsers = () => ({
  type: USER_ALL_LOADING,
});

export const successAllUsers = (data) => ({
  type: USER_ALL_SUCCESS,
  payload: data,
});

export const errorAllUsers = (error) => ({
  type: USER_ALL_ERROR,
  payload: error,
});

// Asynchronous action to fetch all users
export function getAllUsers() {
  return async (dispatch) => {
    dispatch(initAllUsers());
    try {
      // Make GET request to the API
      const response = await clientAxios.get(`/usuarios`);

      // Dispatch success action with the retrieved data
      dispatch(successAllUsers(response?.data));
    } catch (error) {
      // Dispatch error action and display an alert
      console.error("Error in all users");
      dispatch(errorAllUsers(error));
      SweetAlertBasic(
        "error",
        "Ups",
        "Hubo un error a traer todos los usuarios, intente más tarde."
      );
    }
  };
}

// Actions to get all users
export const initCreateUser = () => ({
  type: USER_CREATE_LOADING,
});

export const successCreateUser = (data) => ({
  type: USER_CREATE_SUCCESS,
  payload: data,
});

export const errorCreateUser = (error) => ({
  type: USER_CREATE_ERROR,
  payload: error,
});

// Asynchronous action to create user
export function createUser(data) {
  return async (dispatch) => {
    dispatch(initCreateUser());
    try {
      // Make POST request to the API with the provided data as the request body
      const response = await clientAxios.post(`/usuarios`, data);

      // Dispatch success action with the retrieved data
      dispatch(successCreateUser(response.data));

      // Check if the status is 201 and there are no error messages in the response
      if (response.status === 201 && !response.data?.error) {
        SweetAlertBasic(
          "success",
          "¡Felicidades!",
          "Se ha creado el usuario exitosamente."
        );
        // Call getAllUsers to fetch updated list of users
        dispatch(getAllUsers());
      }
    } catch (error) {
      // Dispatch error action and display an alert
      console.error("Error: ", error);
      dispatch(errorCreateUser(error));
    }
  };
}


// Actions to get all users
export const initDeleteUser = () => ({
  type: USER_DELETE_LOADING,
});

export const successDeleteUser = (userId) => ({
  type: USER_DELETE_SUCCESS,
  payload: userId,
});

export const errorDeleteUser = (error) => ({
  type: USER_DELETE_ERROR,
  payload: error,
});

// Asynchronous action to delete user
export function deleteUser(userId) {
  return async (dispatch) => {
    dispatch(initDeleteUser());
    try {
      // Make DELETE request to the API with the provided user ID
      await clientAxios.delete(`/usuarios/${userId}`);

      // Dispatch success action
      dispatch(successDeleteUser(userId));
      SweetAlertBasic(
        "success",
        "¡Bien hecho!",
        "Se ha borrado el usuario permanentemente."
      );
    } catch (error) {
      // Dispatch error action and display an alert
      console.error("Error: ", error);
      dispatch(errorDeleteUser(error));
      SweetAlertBasic(
        "error",
        "Ups",
        "Hubo un error al eliminar el usuario, intente más tarde."
      );
    }
  };
}

// Actions to get all users
export const initGetUser = () => ({
  type: USER_GET_LOADING,
});

export const successGetUser = (user) => ({
  type: USER_GET_SUCCESS,
  payload: user,
});

export const errorGetUser = (error) => ({
  type: USER_GET_ERROR,
  payload: error,
});

// Asynchronous action to fetch a get user
export function getUser(userId) {
  return async (dispatch) => {
    dispatch(initGetUser());
    try {
      // Make GET request to the API to fetch the user by ID
      const response = await clientAxios.get(`/usuarios/${userId}`);
      console.log("RESPONSE", response);

      // Dispatch success action with the retrieved user
      dispatch(successGetUser(response.data));
    } catch (error) {
      // Dispatch error action and display an alert
      console.error("Error: ", error);
      dispatch(errorGetUser(error));
      SweetAlertBasic(
        "error",
        "Ups",
        "Hubo un error al traernos al usuario, intente más tarde."
      );
    }
  };
}
