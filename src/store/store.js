import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "../reducers/dataReducer";
import { uiReducer } from "../reducers/uiReducer";
import { viewReducer } from "../reducers/viewReducer";

const reducers = combineReducers({
  ui: uiReducer,
  data: dataReducer,
  view: viewReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose; //Para utilizar esto hay que importar compose.

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
