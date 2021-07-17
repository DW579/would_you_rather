import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class AskQuestion extends Component {
    state = {
        optionSelected: null
    }

    handleChange = (e) => {
        this.setState(() => ({
            optionSelected: e.target.value
        }))
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.optionSelected)
    }
    
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

                    <Row className="question-body">
                        <Col md={5} className="question-divder">
                            <Row>
                                <Col></Col>
                                <Col>
                                    <img src={props.avatar} className="avatar" alt="avatar" />
                                </Col>
                                <Col></Col>
                            </Row>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col>
                                    <Row className="margin-bottom">
                                        <Col>
                                            <h4 className="question-title">Would you rather....</h4>
                                        </Col>
                                    </Row>
                                    <Row className="margin-bottom">
                                        <Col>
                                            {/* <p className="question-text">...{props.optionOne}...</p> */}
                                            <form onSubmit={this.handleSubmit}>
                                                <input type="radio" id="optionOne" name="questions" value="1" onChange={this.handleChange} />
                                                <label htmlFor="optionOne">{props.optionOne}</label>

                                                <br />

                                                <input type="radio" id="optionTwo" name="questions" value="2" onChange={this.handleChange} />
                                                <label htmlFor="optionTwo">{props.optionTwo}</label>

                                                <button type="submit" className="question-botton">Submit</button>
                                            </form>
                                        </Col>
                                    </Row>
                                    {/* <Row>
                                        <Col>
                                            <button className="question-botton" onClick={() => console.log("Question ID: ", props.id)}>Submit</button>
                                        </Col>
                                    </Row> */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
            </Row>
        )
    }
}

export default AskQuestion;