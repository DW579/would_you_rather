import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {

    state = {
        user: "sarahedo"
    }

    handleChange = (e) => {
        const user = e.target.value;

        this.setState(() => ({
            user
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { dispatch } = this.props;

        dispatch(setAuthedUser(this.state.user));
    }

    render() {
        const { usernames } = this.props;

        return (
            <Row>
                <Col>
                    
                    <Row>
                        <Col className="text-center login-header">
                            <h4>Welcome to the Would You Rather App!</h4>
                            <h6>Please sign in to continue</h6>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="text-center login-box">
                            <h3>Sign in</h3>
                            <form onSubmit={this.handleSubmit}>
                                <select id="users" name="users" onChange={this.handleChange}>
                                    {usernames.map((user) => {
                                        return <option key={user} value={user}>{user}</option>
                                    })}
                                </select>
                                <button type="submit">Sign in</button>
                            </form>
                        </Col>
                    </Row>

                </Col>
            </Row>
        )
    }
}

function mapStateToProps ({ users, authedUser }) {
    let usernames = [];

    for(const user in users) {
        usernames.push(user)
    }

    return {
        usernames,
        authedUser
    }
}

export default connect(mapStateToProps)(Login);