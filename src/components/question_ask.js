import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { handleUpdateUserAnswers } from "../actions/users";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class AskQuestion extends Component {
    state = {
        optionSelected: null,
        toHome: false
    }

    handleChange = (e) => {
        this.setState(() => ({
            optionSelected: e.target.value
        }))
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.optionSelected !== null) {
            const { dispatch, id, authedUser } = this.props;
            
            const answer = this.state.optionSelected;
            const qid = id;

            const data = {
                authedUser,
                qid,
                answer
            }

            dispatch(handleUpdateUserAnswers(data));

            this.setState(() => ({
                optionSelected: null,
                toHome: true
            }))
        }
    }
    
    render() {
        const { name, avatar, optionOne, optionTwo } = this.props;
        const { toHome } = this.state;

        if (toHome === true) {
            return <Redirect to="/" />
        }

        return (
            <Row>
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
                                            <h4 className="question-title">Would you rather....</h4>
                                        </Col>
                                    </Row>
                                    <Row className="margin-bottom">
                                        <Col>
                                            <form onSubmit={this.handleSubmit}>
                                                <input type="radio" id="optionOne" name="questions" value="optionOne" onChange={this.handleChange} />
                                                <label htmlFor="optionOne">{optionOne.text}</label>

                                                <br />

                                                <input type="radio" id="optionTwo" name="questions" value="optionTwo" onChange={this.handleChange} />
                                                <label htmlFor="optionTwo">{optionTwo.text}</label>

                                                <button type="submit" className="question-botton">Submit</button>
                                            </form>
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

function mapStateToProps ({ authedUser }) {

    return {
        authedUser
    }
}

export default connect(mapStateToProps)(AskQuestion);