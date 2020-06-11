import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Recipe from './Recipe';
import { getRecipes, rateRecipe } from '../../actions/recipes';
import { favoriteRecipe } from '../../actions/user';
import './RecipesList.scss';

const RecipesList = () => {
    const dispatch = useDispatch();
    const apiRecipes = useSelector(state => state.recipes);
    const user = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getRecipes());
    }, []);

    const onFavourited = (id) => {
  
        if (user) {
            const userId = user.id;
            const token = user.token;

            dispatch(favoriteRecipe({ id, userId, token }));

        } else {
            alert('Login to perform this action');
        }
    }

    const onRated = ({ id, rating }) => {

        if (user) {

            const token = user.token;

            dispatch(rateRecipe({ id, rating, token }));

        } else {
            alert('Login to perform this action');
        }
       
    }

    const recipesList = apiRecipes && apiRecipes.recipes;
    const favourites = user 
        ? user.favourites
        : [];

    return (
        <div className="recipes-list">
    
            <div className="recipe-list-header">
                <h1>Recipes for All Tastes and Occasions</h1>
                <p>Choose from over 2,500 lunch or dinner recipes paired with easy, step-by-step instructions specially created by our chefs.</p>
            </div>

            <div className="inner-recipe-list">
                {   recipesList && recipesList.length > 0 && (
                        recipesList.length > 0 && (
                            recipesList.map(recipe => (
                                <Recipe
                                    recipe={recipe}
                                    key={recipe.id}
                                    onFavourite={onFavourited}
                                    favourited={favourites && favourites.includes(recipe.id)}
                                    onRate={onRated}
                                />
                            ))
                        )
                    )
                }
            </div>
        </div>
    )
}

export default RecipesList;