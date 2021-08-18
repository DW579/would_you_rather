import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Account extends Component {

    handleLogout = (e) => {

        const { dispatch } = this.props;

        dispatch(setAuthedUser(null));
    }

    render() {
        const { authedUser } = this.props;

        return(
            <div>
                <p>Hello, {authedUser}</p>
                <button onClick={() => this.handleLogout()}>Logout</button>
            </div>
            
        )
    }
}

function mapStateToProps ({ authedUser }) {

    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Account);