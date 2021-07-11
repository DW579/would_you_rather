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
        let unanswered_ids = [];
        let answered_ids = [];
        const idVotes = this.props.idVotes;
        const authedUser = this.props.authedUser;

        for(let i = 0; i < idVotes.length; i++) {
            if(idVotes[i][1].find(user => user === authedUser) === undefined) {
                unanswered_ids.push(idVotes[i][0]);
            }
            else {
                answered_ids.push(idVotes[i][0]);
            }
        }

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
                                ? unanswered_ids.map((id) => (
                                    <Question key={id} id={id}/>
                                ))
                                : answered_ids.map((id) => (
                                    <Question key={id} id={id}/>
                                ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps ({ questions, authedUser }) {
    let idVotes = [];

    for (const [key, value] of Object.entries(questions)) {
        const votes = value.optionOne.votes.concat(value.optionTwo.votes);

        idVotes.push([key, votes]);
    }

    return {
        idVotes,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionList)