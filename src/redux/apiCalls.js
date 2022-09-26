import { publicRequest } from "../requestMethods";
import { loginFalure, loginStart, loginSuccess, logOut } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFalure());
  }
};
export const logOutfun = async (dispatch) => {
  dispatch(logOut());
};
