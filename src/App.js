import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
// import Dashboard from "./components/dashboard";
import { Container, Row, Col } from "react-bootstrap";
import LoadingBar from "react-redux-loading";
// import NewQuestion from "./components/new_question";
import QuestionPage from "./components/question_page";

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
                  <LoadingBar />
                  {this.props.loading === true
                    ? null
                    : <QuestionPage match={{ params: { id: "vthrdm985a262al8qx3do" }}} />}
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
