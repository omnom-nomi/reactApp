import PropTypes from 'prop-types';

function UserGreeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <h1 className="welcome-message">Welcome back, {props.userName}!</h1>;

    }
    return <h1 className="login-prompt">Please sign up.</h1>;

}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string

}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"

}

export default UserGreeting;