import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './component/Forms/LoginForm/LoginForm';
import RecipesList from './component/Recipes/RecipesList';
import './App.scss';
import { getRecipes } from './actions/recipes';
import Header from './component/UI/Header';
import Footer from './component/UI/Footer';

const App = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state)
    useEffect(() => {
        dispatch(getRecipes());
    }, []);
    
    console.log(state.user)
    return (
        <div className="app">
            <Header />
            <div className="inner-app">
            {/* <LoginForm /> */}
            <RecipesList />
            </div>
            <Footer />
        </div>
    );
}

export default App;