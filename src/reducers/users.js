import { RECEIVE_USERS, ADD_QUESTION, UPDATE_USER_ANSWERS } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_QUESTION:
            console.log("Action", action)
            return {
                ...state,
                ...state[action.question.author].questions.push(action.question.id)
            }
        case UPDATE_USER_ANSWERS:
            const newState = { ...state }

            newState[action.authedUser].answers[action.qid] = action.answer

            return newState
        default:
            return state;
    }
}
