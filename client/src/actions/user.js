import { loginUser, favoriteRecipeById } from '../services/userService';
import actions from './actionsTypes';


export const login =({ email, password }) => {
    return async dispatch => { console.log(email, password)
        try {
            const user = await loginUser({ email, password});

            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: actions.LOGIN,
                payload: user,
            })
        } catch (error) {
            console.log(error.message)
        }
        
    }
}


export const favoriteRecipe = ({id, userId}) => {
    return async dispatch => {
        try {

            const favourites = await favoriteRecipeById({ id, userId });
            const user = localStorage.getItem('user');
            const parsedUser = user && JSON.parse(user);

            if (parsedUser) {
                parsedUser.favourites = favourites;
                localStorage.setItem('user', JSON.stringify(parsedUser));
            }
            
            dispatch({
                type: actions.FAVORITE_RECIPE,
                payload: favourites
            });
        } catch (error) {
            console.log(error.message)
        }
    }
}