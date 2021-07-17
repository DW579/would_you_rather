import React, { Component } from "react";
import { connect } from "react-redux";
import AskQuestion from "./question_ask";
import AnsweredQuestion from "./question_answered";

class QuestionPage extends Component {
    render() {
        const { id, name, avatar, optionOne, optionTwo, answered} = this.props;

        return (
            <div>
                {answered
                ? <AnsweredQuestion id={id} name={name} avatar={avatar} optionOne={optionOne} optionTwo={optionTwo}></AnsweredQuestion>
                : <AskQuestion id={id} name={name} avatar={avatar} optionOne={optionOne} optionTwo={optionTwo}></AskQuestion>}
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
    const { id } = props.match.params;

    return {
        id,
        name: users[questions[id].author].name,
        avatar: users[questions[id].author].avatarURL,
        optionOne: {
            count: questions[id].optionOne.votes.length,
            text: questions[id].optionOne.text,
            answered: questions[id].optionOne.votes.includes(authedUser)
        },
        optionTwo: {
            count: questions[id].optionTwo.votes.length,
            text: questions[id].optionTwo.text,
            answered: questions[id].optionTwo.votes.includes(authedUser)
        },
        answered: questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)
        ? true
        : false
    }
}

export default connect(mapStateToProps)(QuestionPage);