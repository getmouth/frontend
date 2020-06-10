import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Recipe from './Recipe';
import { getRecipes } from '../../actions/recipes';
import './RecipesList.scss';

const RecipesList = () => {
    const dispatch = useDispatch();
    const apiRecipes = useSelector(state => state.recipes);
    const [favourites, setFavourites] = React.useState([]);

    useEffect(() => {
        dispatch(getRecipes());
    }, []);

    const onFavourited = (id) => {
        if (favourites.includes(id)) {
               
            setFavourites(favourites.filter(fav => fav !== id));
        } else {
            setFavourites([...favourites, id])
        }
    }

    const recipesList = apiRecipes.recipes && apiRecipes.recipes;

    return (
        <div className="recipes-list">
    
            {   recipesList && recipesList.length > 0 && (
                    recipesList.length > 0 && (
                        recipesList.map(recipe => (
                            <Recipe
                                recipe={recipe}
                                key={recipe.id}
                                onFavourite={onFavourited}
                                favourited={favourites.includes(recipe.id)}
                            />
                        ))
                    )
                )
            }
        </div>
    )
}

export default RecipesList;