import { loginUser } from '../services/loginService';
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
