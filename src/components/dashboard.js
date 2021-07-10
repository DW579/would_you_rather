import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./question";
import { Row, Col } from "react-bootstrap";

class Dashboard extends Component {
    render() {
        console.log(this.props)
        return (
            <Row>
                <Col>
                    <h1>All Questions</h1>
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

export default connect(mapStateToProps)(Dashboard)