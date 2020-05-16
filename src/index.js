import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//  reducer , kendine gelen data ile state i guncelleyip yeni state doner
import UserReducer from './reducers/UserReducer';
import ProductReducer from './reducers/ProductReducer';

const rootReducer=combineReducers({
  products:ProductReducer,
  user:UserReducer
})

//  dispatch ilemleri middleWare uzerinden gececek, dispatch edileni thunk isletecek
const allEnhancers=compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store=createStore(rootReducer,{
  products:[{
    name:'Samsung',
    type:'TV'
  }],
  user:'Alex'
},
  allEnhancers
);

/*
const updateUserAction={
  type:'userUpdate',
  payload:{
    user:'Tom'
  }
}

store.dispatch(updateUserAction);

console.log(store.getState());

*/

ReactDOM.render(
  <Provider store={store}>
    <App count={4} />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

/*

//  reducer , kendine gelen data ile state i guncelleyip yeni state doner
function reducer(state,action){
  if(action.type==='changeTheState'){
    return action.payload.newState;
  }
  return 'state';
}

const store=createStore(reducer);

console.log(store.getState());

const action={
  type:'changeTheState',
  payload:{
    newState:'my new state'
  }
}

const action2={
  type:'changeTheState',
  payload:{
    newState:'my new state2'
  }
}

//  herhangi bir action.dispatch olursa calisir 
store.subscribe(()=>{
  console.log('store updated',store.getState());
})

store.dispatch(action);
store.dispatch(action2);

console.log(store.getState());
*/