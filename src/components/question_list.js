import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./question";
import { Row, Col } from "react-bootstrap";

class QuestionList extends Component {
    state = {
        unanswered_selected: true
    }

    unansweredSelectedTab() {
        this.setState({
            unanswered_selected: true
        })
    }

    answeredSelectedTab() {
        this.setState({
            unanswered_selected: false
        })
    }

    render() {
        const {answered_ids, unanswered_ids} = this.props


        return (
            <Row>
                <Col>
                    <Row>
                        <Col onClick={() => this.unansweredSelectedTab()} className={this.state.unanswered_selected ? "question-unanswered question-list-tab tab-selected" : "question-unanswered question-list-tab"}>
                            <h5 className="tab-title">Unanswered Questions</h5>
                        </Col>
                        <Col onClick={() => this.answeredSelectedTab()} className={this.state.unanswered_selected ? "question-answered question-list-tab" : "question-answered question-list-tab tab-selected"}>
                            <h5 className="tab-title">Answered Questions</h5>
                        </Col>
                    </Row>
                    <Row className="question-list-body">
                        <Col>
                            {this.state.unanswered_selected 
                                ? unanswered_ids.sort().map((id) => (
                                    <Question key={id} id={id}/>
                                ))
                                : answered_ids.sort().map((id) => (
                                    <Question key={id} id={id}/>
                                ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps ({ questions, authedUser, users }) {
    const answered_ids = Object.keys(users[authedUser].answers)
                               .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const unanswered_ids = Object.keys(questions)
                                 .filter(questionKey => !answered_ids.includes(questionKey))
                                 .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    return {
        answered_ids,
        unanswered_ids
    }
}

export default connect(mapStateToProps)(QuestionList)