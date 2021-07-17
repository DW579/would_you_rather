import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionPage extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Question Page
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
    const { id } = props.match.params;

    return {
        id,
        optionOne: questions[id].optionOne.text,
        optionTwo: questions[id].optionTwo.text,
        answered: questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)
        ? true
        : false
    }
}

export default connect(mapStateToProps)(QuestionPage);