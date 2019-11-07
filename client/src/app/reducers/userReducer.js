const initialState = {
  user: {
    _id: '',
    login: ''
  },
  error: ''
}

const user = (state = initialState, action) => {
  switch(action.type) {

    case 'LOGGED_USER':
      return { ...state, user: { ...action.data } }
    
    case 'RESET_USER':
      return { ...state, user: initialState.user }

    case 'ERROR':
      return { ...state, error: action.error }
       
    default:
      return state;
  }
}

export default user;