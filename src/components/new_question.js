import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
    state = {
        text1: "",
        text2: "",
        toHome: false
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
        const { dispatch, id } = this.props;
        const question = {
            text1,
            text2,
            id
        }

        dispatch(handleAddQuestion(question));

        this.setState(() => ({
            text1: "",
            text2: "",
            toHome: id ? false : true
        }))
    }

    render() {
        const { text1, text2, toHome } = this.state;

        if (toHome === true) {
            return <Redirect to="/" />
        }

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
                                    className="create-input"
                                />
                                <p className="create-or text-center">OR</p>
                                <input 
                                    placeholder="Enter Option Two Text Here"
                                    value={text2}
                                    onChange={this.handleChange2}
                                    className="create-input"
                                />
                                <button
                                    type="submit"
                                    disabled={text1 === "" || text2 === ""}
                                    className="create-button"
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

export default connect()(NewQuestion);