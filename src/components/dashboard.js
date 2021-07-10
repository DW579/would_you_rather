import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./question";

class Dashboard extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>All Questions</h1>
                {this.props.questionIds.map((id) => (
                    <Question key={id} id={id}/>
                ))}

                <h1>Unanswered Questions</h1>

                <h1>Answered Questions</h1>

            </div>
        )
    }
}

function mapStateToProps ({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)