import { AuthActionTypes } from "../constants/action.types";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH:
      console.log(action);
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data };

    case AuthActionTypes.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
