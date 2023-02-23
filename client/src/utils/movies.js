import {  createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
 name:'movies',
 initialState:{
    data:[],
    querry:'',
    loading:false
 },
 reducers:{
  addMovie:(movies, action) => {

      movies.data.push(action.payload); 
 },
  deleteMovies:(movies,action)=>{
    movies.data =movies.data.filter(mov=> mov.id !== action.payload.id)
  },
  searchUpdate:(movies,action)=>{
     movies.querry = action.payload
  },
  restore:(movies,action)=>{
   movies.data = action.payload
  }
 
 }
})
export const {addMovie,deleteMovies,searchUpdate,restore} = slice.actions;
export default slice.reducer;