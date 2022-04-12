import * as api from "../api/index.api";
import { AuthActionTypes } from "../constants/action.types";

const { AUTH } = AuthActionTypes;

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //signin...
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    //signup...
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
