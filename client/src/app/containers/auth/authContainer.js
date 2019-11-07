import { connect } from 'react-redux';

import AuthComponent from '../../components/auth/AuthComponent.jsx';

import { loginUserAction, registerUserAction } from '../../actions/actions.js';


const mapStateToProps = (state) => {
  //const { popupIsOpen, popupType } = state.general.popup;
  return {  };
}

const mapDispatchToProps = dispatch => ({
  loginUserAction: (args) => dispatch(loginUserAction(args)),
  registerUserAction: (args) => dispatch(registerUserAction(args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);