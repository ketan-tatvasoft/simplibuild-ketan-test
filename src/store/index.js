import { 
  applyMiddleware,
  compose,
  createStore
} from "redux";

// Redux Middleware
import thunkMiddleware from "redux-thunk";

import rootReducer from "../reducers";

// Configuring store with default state
export default function configureStore(initialState = {}) {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)  
  
  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers    
  );

  return store;
};
