import axios from 'axios';

export const loginUser = args => dispatch => {
  console.log(args)
  axios.post('/users/login', args)
    .then((res) => {
      dispatch({ type: 'LOGGED_USER', data: res.data })
    })
    .catch ((err) => console.log(err))
}

export const logoutUser = dispatch => {
  axios.get('/users/logout')
    .then((res) => {
      if (!res.data) dispatch({ type: 'RESET_USER' });
      return;
    })
}

export const registerUser = args => dispatch => {
  axios.post('/users/register', args)
    .then((res) => {

    })
    .catch((err) => {
      console.log(err)
    })
}
