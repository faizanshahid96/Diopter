import api from "../api";
import {userLoggedIn} from "./auth";

export const signup = data => dispatch =>
    api.user.signup(data).then(user => {
        // localStorage.photographyJWT = user.token;
        // localStorage.email=user.email;

        // dispatch(userLoggedIn(user));
    });
