import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import { getProductsReducer,getProductDeatailsReducer } from './reducer/ProductReducer';
import { cartReducer } from './reducer/CartReducer';


const reducer = combineReducers({
     getProducts: getProductsReducer,
     getProductsDeatails :getProductDeatailsReducer,
     cart : cartReducer
})

const middleware = [thunk];

const store = createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

