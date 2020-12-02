// src/store/index.js
import { combineReducers, createStore } from "redux";
import userReducer from "./user/reducer";
import pizzasReducer from "./pizzas/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const store = createStore(
  combineReducers({
    user: userReducer,
    pizzas: pizzasReducer,
  }),
  enhancer
);

export default store;
