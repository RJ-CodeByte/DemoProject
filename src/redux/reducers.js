import { SET_USERS, SET_USERS_ID } from "./actions";

const initialState = {
    userData: [],
    userID: 4
}


function usersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERS:
            return { ...state, userData: action.payload }
        case SET_USERS_ID:
            return { ...state, userID: action.payload }
        default:
            return state;
    }
}

export default usersReducer;