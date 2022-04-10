import * as api from "../api/index.api";
import { AuthActionTypes } from "../constants/action.types";

const { AUTH } = AuthActionTypes;

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //signin...
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    //signup...
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
