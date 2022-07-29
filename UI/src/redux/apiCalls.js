import { publicRequest } from '../requestMethods';
import { loginFailure, loginStart, loginSuccess } from './userRedux';

export const login = async (dispatch, user) => {
    console.log(user);
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}

export const register = async (user) => {
    try {
        return await publicRequest.post("/auth/register", user);
    } catch (err) {
        console.log(err);
    }
}