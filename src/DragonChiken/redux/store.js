import {combineReducers, createStore} from "redux";
import reducer from "./reducer";

const store = createStore(combineReducers({dragonChicken: reducer}));

export default store;