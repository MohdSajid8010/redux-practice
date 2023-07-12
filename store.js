//store:store the state variable

import { createStore } from "redux";

import CounterReducer from "./reducers/CounterReducer.js";

const store=createStore(CounterReducer);//store state varialble

export default store;

