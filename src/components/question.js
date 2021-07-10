import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

class Question extends Component {
    render() {
        const { question } = this.props;
        
        const {
            name, id, timestamp, avatar, optionOne, optionTwo
        } = question;

        return (
            <div className="question">
                <div className="question-name">
                    {name} asks:
                </div>
                <div>
                    <div>
                        <img src={avatar} />
                    </div>
                    <div>
                        <h4>Would you rather</h4>
                        <p>...{optionOne.text}...</p>
                        <button>View Poll</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, {id}) {
    const question = questions[id];

    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    }
}

export default connect(mapStateToProps)(Question)