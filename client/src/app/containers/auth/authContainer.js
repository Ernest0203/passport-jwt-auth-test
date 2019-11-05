  
import { connect } from 'react-redux';

import AuthComponent from '../../components/auth/AuthComponent.jsx';

import {
  loginUser,
  registerUser,
} from '../../actions/actions.js';


const mapStateToProps = (state) => {
  //const { popupIsOpen, popupType } = state.general.popup;
  return {  };
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (args) => {
    dispatch(loginUser(args));
  },
  registerUser: (args) => {
    dispatch(registerUser(args));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);