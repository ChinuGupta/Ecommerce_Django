import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


export default function Store() {
  return (
    <div>Store</div>
  )
}
