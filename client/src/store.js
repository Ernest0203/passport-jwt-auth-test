import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import general from './app/reducers/index.js';
import { watchUserAuthentication } from './app/actions/sagas.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  general, 
  applyMiddleware(sagaMiddleware)
  //applyMiddleware(thunk)
);

sagaMiddleware.run(watchUserAuthentication)

export default store;