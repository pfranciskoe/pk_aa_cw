import {postUser,deleteSession,postSession} from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

const recieveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user=> dispatch(recieveCurrentUser(user)));

export const login = formUser => dispatch => postSession(formUser)
    .then(user=> dispatch(recieveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
    .then(()=> dispatch(logoutCurentUser()))