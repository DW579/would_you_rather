import React, { Component } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

class AnsweredQuestion extends Component {
    render() {
        const { name, avatar, optionOne, optionTwo} = this.props;
        const barMax = optionOne.count + optionTwo.count;

        return (
            <Row>
                <Col>

                    <Row className="question-header">
                        <Col>
                            <h5 className="question-name">Asked by {name}:</h5>
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
                                            <h4 className="question-title">Results:</h4>
                                        </Col>
                                    </Row>
                                    <Row className="margin-bottom">
                                        <Col className={optionOne.answered ? "voted-box" : "answered-box"}>
                                            <h5>{optionOne.answered ? "You voted for: " : ""}</h5>
                                            <h5>Would you rather {optionOne.text}</h5>
                                            <ProgressBar max={barMax} now={optionOne.count} label={((optionOne.count / barMax) * 100).toPrecision(3).toString() + "%"} />
                                            <h6>{optionOne.count} out of {barMax} votes</h6>
                                        </Col>
                                    </Row>
                                    <Row className="margin-bottom">
                                        <Col className={optionTwo.answered ? "voted-box" : "answered-box"}>
                                            <h5>{optionTwo.answered ? "You voted for: " : ""}</h5>
                                            <h5>Would you rather {optionTwo.text}</h5>
                                            <ProgressBar max={barMax} now={optionTwo.count} label={((optionTwo.count / barMax) * 100).toPrecision(3).toString() + "%"} />
                                            <h6>{optionTwo.count} out of {barMax} votes</h6>
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

export default AnsweredQuestion;