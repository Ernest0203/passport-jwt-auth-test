import { connect } from 'react-redux';

import AuthComponent from '../../components/auth/AuthComponent.jsx';

import { loginUserAction, registerUserAction } from '../../actions/actions.js';


const mapStateToProps = (state) => {
  const { error, confirm } = state.user;
  return { error, confirm };
}

const mapDispatchToProps = dispatch => ({
  loginUserAction: (args) => dispatch(loginUserAction(args)),
  registerUserAction: (args) => dispatch(registerUserAction(args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);