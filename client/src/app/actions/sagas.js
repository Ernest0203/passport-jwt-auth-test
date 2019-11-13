import axios from 'axios';
import { put,takeLatest } from 'redux-saga/effects';

function* loginUser(args) {
  try {
    const res = yield axios.post('/users/login', args);
    console.log(res.data);
    
    yield put({ type: 'LOGGED_USER', data: res.data });
  } catch(error) {
    yield put({ type: 'ERROR', data: error.response.data });
  }
}

function* registerUser(args) {
  try {
    const res = yield axios.post('/users/register', args);
    yield put({ type: 'REGISTERED_USER', data: res.data })
  } catch(error) {
    yield put({ type: 'ERROR', data: error.response.data });
  }
}

export const logoutUser = dispatch => {
  axios.get('/users/logout')
    .then((res) => {
      if (!res.data) dispatch({ type: 'RESET_USER' });
      return;
    })
}

export function* watchUserAuthentication() {
  yield takeLatest('REGISTER_USER', registerUser);
  yield takeLatest('LOGIN_USER', loginUser);
}

