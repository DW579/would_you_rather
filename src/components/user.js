import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class User extends Component {
    render() {
        const { name, avatar, answerCount, questionCount, score } = this.props;
        return (
            <Row>
                <Col className="user-box">
                    
                    <Row>
                        <Col md={3} className="user-avatar">
                            <img src={avatar} className="avatar" alt="avatar" />
                        </Col>
                        <Col md={6} className="user-info">
                            <Row>
                                <Col md={1}></Col>
                                <Col>
                                    <h2>{name}</h2>
                                </Col>
                                <Col md={1}></Col>
                            </Row>
                            
                            <Row>
                                <Col md={1}></Col>
                                <Col className="bottom-border">
                                    <h5>Answered questions</h5>
                                </Col>
                                <Col>
                                    {answerCount}
                                </Col>
                                <Col md={1}></Col>
                            </Row>
                            <Row>
                                <Col md={1}></Col>
                                <Col>
                                    <h5>Created questions</h5>
                                </Col>
                                <Col>
                                    {questionCount}
                                </Col>
                                <Col md={1}></Col>
                            </Row>
                            
                        </Col>
                        <Col md={3} className="user-score">
                            <Row>
                                <Col className="score-header">
                                    <h4>Score</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {score}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
            </Row>
        )
    }
}

export default User;