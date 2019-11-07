export const registerUserAction = (args) => {
  return {
    type: 'REGISTER_USER',
    args
  }
};

export const registerUserSuccess = (data) => {
  return {
    type: 'REGISTERED_USER',
    data
  }
};

export const loginUserAction = (args) => {
  return {
    type: 'LOGIN_USER',
    args
  }
};

export const loginUserSuccess = (data) => {
  return {
    type: 'LOGGED_USER',
    data
  }
};