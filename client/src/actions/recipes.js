import { getAllRecipes, rateRecipeById } from '../services/recipesService';
import actions from './actionsTypes';


export const getRecipes = () => {
    return async dispatch => {
        const data = await getAllRecipes();
        dispatch({
            type: actions.GET_RECIPES,
            payload: data
        })
    }
}

export const rateRecipe = ({id, rating }) => {
    return async dispatch => {
        try {
            const recipe = await rateRecipeById({ id, rating });
            dispatch({
                type: actions.RATE_RECIPE,
                payload: recipe
            })
        } catch(error) {
            console.log(error.message)
        }
    }
}