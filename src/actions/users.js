import { saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

function updateUserAnswer ({ authedUser, qid, answer}) {
    return {
        type: UPDATE_USER_ANSWERS,
        authedUser,
        qid,
        answer
    }
}

export function handleUpdateUserAnswers (info) {
    return (dispatch) => {
        dispatch(updateUserAnswer(info))
        dispatch(showLoading());

        return saveQuestionAnswer(info)
            .then(() => dispatch(hideLoading()))
            .catch((e) => {
                console.warn("Error in handleUpdateUserAnswers: ", e)
                dispatch(updateUserAnswer(info))
                alert("There was an error updating user answer. Try again")
            })
            
    }
}
