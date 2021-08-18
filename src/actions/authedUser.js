import { showLoading, hideLoading } from "react-redux-loading";

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    };
}

// export function setAuthedUser({authedUser}) {
//     return (dispatch) => {
//         dispatch(showLoading());
//         dispatch(setAuthedUser(authedUser));
//         dispatch(hideLoading());
//     };
// }
