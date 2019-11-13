const initialState = {
  user: {
    _id: '',
    login: ''
  },
  error: '',
  confirm: ''
}

const user = (state = initialState, action) => {
  switch(action.type) {

    case 'LOGGED_USER':
      return { ...state, user: { ...action.data }, error: '' }
    
    case 'REGISTERED_USER':
      return { ...state, confirm: `User ${action.data.login} was created`, error: '' }
    
    case 'RESET_USER':
      return { ...state, user: initialState.user, }

    case 'ERROR':
      return { ...state, error: action.data, confirm: '' }
       
    default:
      return state;
  }
}

export default user;