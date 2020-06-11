import actions from '../actions/actionsTypes';


const recipeReducer = (state = [], action) => {
    switch(action.type) {
        case actions.GET_RECIPES:

            return {
                ...state,
                recipes: action.payload
            }

        case actions.RATE_RECIPE: 
            return {
                ...state,
                recipes: state.recipes.map(
                    recipe => recipe.id === action.payload.id
                        ? action.payload
                        : recipe
                )
            }

            default:
                return state;
    }
}

export default recipeReducer;