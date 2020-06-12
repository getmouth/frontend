import React from  'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from '../Forms/LoginForm/LoginForm';
import RecipesList from '../Recipes/RecipesList';
import './Routes.scss';

const Routes = () => {
    const user = useSelector(state => state.user);
    //console.log(user)
    return (
        <div className="routes">
            <Switch>
                <Route path="/" exact>
                    {
                        user 
                        ? <RecipesList />
                        : <Redirect to="/login" />
                    }
                </Route>
                <Route path="/login">
                    <LoginForm />
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;