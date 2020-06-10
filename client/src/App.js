import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './component/Forms/LoginForm/LoginForm';
import RecipesList from './component/Recipes/RecipesList';
import './App.scss';
import { getRecipes } from './actions/recipes';

const App = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state)
    useEffect(() => {
        dispatch(getRecipes());
    }, [])
    console.log(state.user)
    return (
        <div>
            {/* <LoginForm /> */}
            <RecipesList />
        </div>
    );
}

export default App;