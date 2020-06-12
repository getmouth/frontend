import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './component/Forms/LoginForm/LoginForm';
import RecipesList from './component/Recipes/RecipesList';
import './App.scss';
import { getRecipes } from './actions/recipes';
import Header from './component/UI/Header';
import Footer from './component/UI/Footer';
import Routes from './component/Routes/Routes';

const App = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state)
    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);
    
    return (
        <div className="app">
            <Header />
            <div className="inner-app">
                <Routes />
            {/* <LoginForm /> */}
            {/* <RecipesList /> */}
            </div>
            <Footer />
        </div>
    );
}

export default App;