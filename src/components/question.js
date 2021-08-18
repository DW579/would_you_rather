import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Question extends Component {
    render() {
        const { question } = this.props;
        
        const {
            name, id, avatar, optionOne
        } = question;

        return (
            <Row className="question">
                <Col>
                    <Row className="question-header">
                        <Col>
                            <h5 className="question-name">{name} asks:</h5>
                        </Col>
                    </Row>
                    <Row className="question-body">
                        <Col md={5} className="question-divder">
                            <Row>
                                <Col></Col>
                                <Col>
                                    <img src={avatar} className="avatar" alt="avatar" />
                                </Col>
                                <Col></Col>
                            </Row>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col>
                                    <Row className="margin-bottom">
                                        <Col>
                                            <h4 className="question-title">Would you rather</h4>
                                        </Col>
                                    </Row>
                                    <Row className="margin-bottom">
                                        <Col>
                                            <p className="question-text">...{optionOne.text}...</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Link to={`/question/${id}`} className="question-botton">View Poll</Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
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