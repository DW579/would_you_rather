import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import User from "./user";

class Leaderboard extends Component {
    render() {
        const { ranked_users } = this.props;

        return (
            <Row>
                <Col>
                    {ranked_users.map((user) => {
                    return <User key={user.id} 
                    name={user.name}
                    avatar={user.avatarURL}
                    answerCount={Object.keys(user.answers).length}
                    questionCount={user.questions.length}
                    score={user.questions.length + Object.keys(user.answers).length} />
                    })}
                </Col>
            </Row>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
       ranked_users: Object.keys(users)
                       .sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) 
                                       - (users[a].questions.length + Object.keys(users[a].answers).length))
                       .map(key => users[key])
   }
}

export default connect(mapStateToProps)(Leaderboard);