import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const store = createStore(combineReducers({dragonChicken: reducer}), applyMiddleware(thunkMiddleware));

export default store;