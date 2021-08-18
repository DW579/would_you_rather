import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

function answerQuestion ({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function handleAddQuestion ({text1, text2}) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestion({
            optionOneText: text1,
            optionTwoText: text2,
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}

export function handleAnswerQuestion (info) {
    return (dispatch) => {
        dispatch(answerQuestion(info));

        return saveQuestionAnswer(info)
            .catch((e) => {
                console.warn("Error in handleToggleTweet: ", e)
                dispatch(answerQuestion(info))
                alert("There was an error answering the question. Try again.")
            })
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}
