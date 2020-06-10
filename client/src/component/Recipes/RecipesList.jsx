import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Recipe from './Recipe';
import { getRecipes } from '../../actions/recipes';
import './RecipesList.scss';

const RecipesList = () => {
    const dispatch = useDispatch();
    const apiRecipes = useSelector(state => state.recipes);

    useEffect(() => {
        dispatch(getRecipes());
    }, [])

    const recipesList = apiRecipes.recipes && apiRecipes.recipes;

    return (
        <div className="recipes-list">
    
            {   recipesList && recipesList.length > 0 && (
                    recipesList.length > 0 && (
                        recipesList.map(recipe => (
                            <Recipe recipe={recipe} key={recipe.id} />
                        ))
                    )
                )
            }
        </div>
    )
}

export default RecipesList;