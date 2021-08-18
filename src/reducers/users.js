import { RECEIVE_USERS, UPDATE_USER_ANSWERS } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case UPDATE_USER_ANSWERS:
            const newState = { ...state }

            newState[action.authedUser].answers[action.qid] = action.answer

            return newState
        default:
            return state;
    }
}
