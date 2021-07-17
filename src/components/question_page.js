import React, { Component } from "react";
import { connect } from "react-redux";
import AskQuestion from "./question_ask";
import AnsweredQuestion from "./question_answered";

class QuestionPage extends Component {
    render() {
        const props = this.props;

        console.log(props)
        return (
            <div>
                {this.props.answered
                ? <AnsweredQuestion id={props.id}></AnsweredQuestion>
                : <AskQuestion id={props.id} name={props.name} avatar={props.avatar} optionOne={props.optionOne} optionTwo={props.optionTwo}></AskQuestion>}
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
        optionOne: questions[id].optionOne.text,
        optionTwo: questions[id].optionTwo.text,
        answered: questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)
        ? true
        : false
    }
}

export default connect(mapStateToProps)(QuestionPage);