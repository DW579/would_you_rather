import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class NewQuestion extends Component {
    state = {
        text: ""
    }

    handleChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { text } = this.state;

        // todo: Add Question to Store

        console.log("New Question: ", text);

        this.setState(() => ({
            text: ""
        }))
    }

    render() {
        return (
            <Row>
                <Col>
                    <Row>
                        <Col className="text-center create-header">
                            <h2>Create New Question</h2>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        )
    }
}

export default NewQuestion;