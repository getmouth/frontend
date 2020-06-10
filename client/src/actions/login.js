import { loginUser } from '../services/loginService';
import actions from './actionsTypes';


export const login =({ email, password }) => {
    return async dispatch => {
        try {
            const user = await loginUser({ email, password});
            dispatch({
                type: actions.LOGIN,
                payload: user,
            })
        } catch (error) {
            console.log(error)
        }
        
    }
}
