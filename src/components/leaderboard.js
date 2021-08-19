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
                        // return <User key={user.id} name={user.name} avatar={user.avatarURL} answerCount={user.score - user.questions.length} questionCount={user.questions.length} score={user.score} />
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

// function mapStateToProps ({ users }) {

//     let scores = [];
//     let scores_dict = {};
//     let ranked_users = [];

//     // Order users by rank
//     for(const key in users) {
//         console.log(users[key])
//         const score = Object.keys(users[key].answers).length + users[key].questions.length;

//         scores.push(score);
//         scores_dict[score] = key;
//     }

//     scores.sort(function(a,b) {
//         return b - a;
//     })

//     for(let i = 0; i < scores.length; i++) {
//         // Add score
//         users[scores_dict[scores[i]]].score = scores[i];

//         ranked_users.push(users[scores_dict[scores[i]]]);
//     }

//     return {
//         ranked_users
//     }
// }

function mapStateToProps ({ users }) {
    return {
       ranked_users: Object.keys(users)
                       .sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) 
                                       - (users[a].questions.length + Object.keys(users[a].answers).length))
                       .map(key => users[key])
   }
}

export default connect(mapStateToProps)(Leaderboard);