import { RECEIVE_USERS, ADD_QUESTION, UPDATE_USER_ANSWERS } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_QUESTION:
            return {
                // ...state,
                // ...state[action.question.author].questions.push(action.question.id)

                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat(action.question.id)
                }
            }
        case UPDATE_USER_ANSWERS:
            // const newState = { ...state }

            // newState[action.authedUser].answers[action.qid] = action.answer

            // return newState

console.log(action)
            return {
                ...state,
                [action.authedUser]: {
                  ...state[action.authedUser],
                  answers: {
                    ...state[action.authedUser].answers,
                    [action.qid]: action.answer
                  }
                }
            }
        default:
            return state;
    }
}
