import actions from '../actions/actionsTypes';

const localUser = localStorage.getItem('user');
const initialuser = JSON.parse(localUser);

const userReducer = (state = initialuser, action) => {
    switch(action.type) {
        case actions.LOGIN:
            return {
                ...state,
                user: action.payload
            }

        
        case actions.FAVORITE_RECIPE:

            return {
                ...state,
                favourites: action.payload
            }
        
        default:
            return state;
    }
}

export default userReducer;