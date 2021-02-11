import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "../reducers/cartReducer";
import { dataReducer } from "../reducers/dataReducer";
import { pricesReducer } from "../reducers/pricesReducer";
import { uiReducer } from "../reducers/uiReducer";
import { viewReducer } from "../reducers/viewReducer";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const reducers = combineReducers({
  ui: uiReducer,
  data: dataReducer,
  view: viewReducer,
  cart: cartReducer,
  prices: pricesReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose; //Para utilizar esto hay que importar compose.

const persistedState = loadFromLocalStorage();

export const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState('cart')));
