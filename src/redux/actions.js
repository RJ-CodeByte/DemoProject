export const SET_USERS = 'SET_USERS';
export const SET_USERS_ID = 'SET_USERS_ID';


export const setUsers = users => dispatch => {
    dispatch({
        type: SET_USERS,
        payload: users,
    });
    // console.log("redux", users);
};

export const setUsersID = usersID => dispatch => {
    dispatch({
        type: SET_USERS_ID,
        payload: usersID,
    });
};
