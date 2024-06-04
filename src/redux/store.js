import thunk from "redux-thunk"
import { applyMiddleware, combineReducers, compose, createStore } from "redux"

import shop from "./reducers/shop"
import cart from "./reducers/cart"
import like from "./reducers/like"

const rootReducer = combineReducers({
   cart,
   shop,
   like,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store