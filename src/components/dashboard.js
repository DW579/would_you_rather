import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./question";
import QuestionList from "./question_list";
import { Row, Col } from "react-bootstrap";

// Dashboard will handle the switch between all the different pages

class Dashboard extends Component {
    render() {
        console.log(this.props)
        return (
            <Row>
                <Col>
                    <h1>All Questions</h1>
                    {/* {this.props.questionIds.map((id) => (
                        <Question key={id} id={id}/>
                    ))} */}
                    <QuestionList />
                </Col>
            </Row>
        )
    }
}

// function mapStateToProps ({ questions }) {
//     return {
//         questionIds: Object.keys(questions)
//             .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
//     }
// }


export default Dashboard;