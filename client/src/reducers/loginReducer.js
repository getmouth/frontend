import actions from '../actions/actionsTypes';

const localUser = localStorage.getItem('user');
const initialuser = JSON.parse(localUser);
const loginReducer = (state = initialuser, action) => {
    switch(action.type) {
        case actions.LOGIN:
            return {
                ...state,
                user: action.payload
            }
        
        default:
            return state;
    }
}

export default loginReducer;