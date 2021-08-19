import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../actions/questions";
import { UPDATE_USER_ANSWERS } from "../actions/users";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        // case ANSWER_QUESTION:
        //     const {authedUser,qid,answer} = action.answer

        //     return {
        //         // ...state,
        //         // [action.authedUser]: {
        //         //     ...state[action.authedUser].answers[action.qid] = [action.answer],
        //         // } 

        //         ...state,
        //         [qid]: {
        //           ...state[qid],
        //           [answer]: {
        //             ...state[qid][answer],
        //             votes: state[qid][answer].votes.concat([authedUser])
        //           }
        //         }
                
        //     }

        case UPDATE_USER_ANSWERS:
            const {authedUser,qid,answer} = action
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                    ...state[qid][answer],
                    votes: state[qid][answer].votes.concat(authedUser)
                    }
                }   
            }
        default:
            return state;
    }
}
