import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/"; // todos los reducers
const store = createStore(rootReducers, applyMiddleware());  
export default store;
