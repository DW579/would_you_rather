import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class NewQuestion extends Component {
    state = {
        text1: "",
        text2: ""
    }

    handleChange1 = (e) => {
        const text1 = e.target.value;

        this.setState(() => ({
            text1
        }))
    }

    handleChange2 = (e) => {
        const text2 = e.target.value;

        this.setState(() => ({
            text2
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { text1, text2 } = this.state;

        // todo: Add Question to Store

        console.log("New Question 1: ", text1);
        console.log("New Question 2: ", text2);

        this.setState(() => ({
            text1: "",
            text2: ""
        }))
    }

    render() {
        const { text1, text2 } = this.state;

        return (
            <Row>
                <Col>
                    <Row>
                        <Col className="text-center create-header">
                            <h2>Create New Question</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="create-body">
                            <h5>Complete the question:</h5>
                            <h4 className="rather-text">Would you rather....</h4>
                            <form onSubmit={this.handleSubmit}>
                                <input 
                                    placeholder="Enter Option One Text Here"
                                    value={text1}
                                    onChange={this.handleChange1}
                                />
                                <p>OR</p>
                                <input 
                                    placeholder="Enter Option Two Text Here"
                                    value={text2}
                                    onChange={this.handleChange2}
                                />
                                <button
                                    type="submit"
                                    disabled={text1 === "" || text2 === ""}
                                >
                                    Submit
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default NewQuestion;