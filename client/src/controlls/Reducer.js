import { combineReducers } from "redux";
import moviesReducer from '../utils/movies'
import usersReducer from '../utils/users'
export default combineReducers({
 movies: moviesReducer,
 users:usersReducer
})