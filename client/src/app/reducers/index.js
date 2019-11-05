import { combineReducers } from 'redux';

import user from './userReducer.js';

const general = combineReducers({
  user: user,
})

export default general;