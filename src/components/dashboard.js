import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionList from "./question_list";
import { Row, Col } from "react-bootstrap";

// Dashboard will handle the switch between all the different pages

class Dashboard extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <QuestionList/>
                </Col>
            </Row>
        )
    }
}

// Find a way to remove or pull in other data
function mapStateToProps ({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)