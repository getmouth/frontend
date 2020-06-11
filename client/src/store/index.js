import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import recipeReducer from '../reducers/recipesReducer';
import userReducer from '../reducers/userReducer';

const reducer = combineReducers({
    recipes: recipeReducer,
    user: userReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;