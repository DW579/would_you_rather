import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Dashboard from "./components/dashboard";
import { Container, Row, Col } from "react-bootstrap";
import LoadingBar from "react-redux-loading";
import NewQuestion from "./components/new_question";
import QuestionPage from "./components/question_page";
import Leaderboard from "./components/leaderboard";
import Login from "./components/login";
import Nav from "./components/nav";
import Account from "./components/account";
import NoMatch from "./components/no_match";

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }

    render() {
        return (
          <Router>
            <Fragment>
              <LoadingBar />
              <Container>
                <Row>
                  <Col>
                    {this.props.loading === true
                      ? <Login />
                      : <div>
                          <Nav />
                          <Account />
                          <Route path="/" exact component={Dashboard} />
                          <Route path="/questions/:id" component={QuestionPage} />
                          <Route path="/add" component={NewQuestion} />
                          <Route path="/leaderboard" component={Leaderboard} />
                          <Route path="/login" component={Login} />
                          <Route path="*" component={NoMatch} />
                        </div>}
                  </Col>
                </Row>
              </Container>
            </Fragment>
          </Router>

        )
    }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
