import { configureStore} from '@reduxjs/toolkit'
import moviesReducer from '../utils/movies'
import usersReducer from '../utils/users'
// import { addMovie, deleteMovies,searchUpdate } from '../utils/movies'
export const store =  configureStore({reducer:{
  movies: moviesReducer,
  users:usersReducer
}})
 // store.dispatch(addMovie({data:'ddd',id:123}))
 //  store.dispatch(addMovie({data:'dgdhfgdd',id:1235}))
 //  store.dispatch(deleteMovies({id:123}))
 //  store.dispatch(searchUpdate('hello'))
  // console.log(store.getState().movies); 
