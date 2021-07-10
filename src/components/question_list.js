import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./question";
import { Row, Col } from "react-bootstrap";

class QuestionList extends Component () {
    render() {
        return (
            <Row>
                <Col>
                    {this.props.questionIds.map((id) => (
                        <Question key={id} id={id}/>
                    ))}
                </Col>
            </Row>
        )
    }
}

function mapStateToProps ({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionList)