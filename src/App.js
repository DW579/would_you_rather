import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Dashboard from "./components/dashboard";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }

    render() {
        return (
          <div>
            <Container>
              <Row>
                <Col>
                  {this.props.loading === true
                    ? null
                    : <Dashboard />}
                </Col>
              </Row>
            </Container>
          </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
