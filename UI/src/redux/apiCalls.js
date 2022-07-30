import { publicRequest, userRequest } from '../requestMethods';
import { loginFailure, loginStart, loginSuccess } from './userRedux';

export const login = async (dispatch, user) => {
    console.log(user);
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        return true;
    } catch (err) {
        dispatch(loginFailure());
        return false;
    }
}

export const register = async (user) => {
    try {
        return await publicRequest.post("/auth/register", user);
    } catch (err) {
        console.log(err);
    }
}

export const getOrders = async (accessToken, userId) => {
    try {
        var request = userRequest(accessToken);
        return request.get(`/orders/find/${userId}`);
    } catch (err) {
        return err;
    }
}