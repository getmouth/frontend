import actions from '../actions/actionsTypes';


const recipeReducer = (state = [], action) => {
    switch(action.type) {
        case actions.GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }

            default:
                return state;
    }
}

export default recipeReducer;