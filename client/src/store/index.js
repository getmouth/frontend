import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import recipeReducer from '../reducers/recipesReducer';
import loginReducer from '../reducers/loginReducer';

const reducer = combineReducers({
    recipes: recipeReducer,
    user: loginReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;