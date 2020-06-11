import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import recipes from '../reducers/recipesReducer';
import user from '../reducers/userReducer';

const reducer = () => combineReducers({
    recipes,
    user
});

const store = createStore(
    reducer(),
    applyMiddleware(thunk)
);

export default store;