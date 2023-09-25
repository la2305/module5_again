import thunk from "redux-thunk";
import { rootReducer } from "./reducer/RootReducer";
import {applyMiddleware, createStore} from "redux";

const initStore = {};
const middleWare = [thunk];

const store = createStore(rootReducer,initStore,applyMiddleware(...middleWare));
export default store;