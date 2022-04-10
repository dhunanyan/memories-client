import { AuthActionTypes } from "../constants/action.types";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };

    case AuthActionTypes.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
