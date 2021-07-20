import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

class Login extends Component {
    render() {
        console.log(this.props)
        return (
            <Row>
                <Col>
                    Login Page
                </Col>
            </Row>
        )
    }
}

function mapStateToProps ({ users }) {

    return {
        users
    }
}

export default connect(mapStateToProps)(Login);