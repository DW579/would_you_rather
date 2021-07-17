import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class AskQuestion extends Component {
    render() {
        const props = this.props;

        return (
            <Row>
                <Col>
                    <Row className="question-header">
                        <Col>
                            <h5 className="question-name">{props.name} asks:</h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default AskQuestion;