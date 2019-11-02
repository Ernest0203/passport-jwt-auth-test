import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import general from './app/reducers/index.js';

const store = createStore(
  general, 
  applyMiddleware(thunk)
);

export default store;