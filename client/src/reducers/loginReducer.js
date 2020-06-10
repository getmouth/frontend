import actions from '../actions/actionsTypes';

const loginReducer = (state = null, action) => {
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