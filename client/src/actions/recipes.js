import { getAllRecipes } from '../services/recipesService';
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