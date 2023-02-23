
import {  Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Account from './pages/Account';
import Notification from "./pages/Notification";
import MoviePage from "./pages/MoviePage";
import Explore from "./components/Explore";
import Main from "./components/Main";
import Faviorate from "./pages/Faviorate";
import {getStatus} from './utils/users'
import { useDispatch, useSelector } from "react-redux";
import { restore } from "./utils/movies";
import { useEffect } from "react";

function App() {

  const status = useSelector(getStatus)
  const user = useSelector(state => state.users.user)
  const dispatch = useDispatch()
   useEffect(()=>{
       dispatch(restore(user?.favMovies))
   },[status,user])
  return(
    <>
     {/* { popUpOpen && (<PopUp type={typePopup}/>) } */}
        <Routes>
        <Route path="/" element={<Home />} >
         <Route path="" element={<Main />}/>
         <Route path="/:typeId&:name" element={<MoviePage />}/>
         <Route path="notification" element={<Notification/>}/>
         <Route path="explore/:name" element={<Explore />}/>
         <Route path='fav' element={<Faviorate />}/>
        </Route>
        <Route path='account' element={<Account/>}/>
        </Routes>
      
    </>
   
    
  )
}

export default App;
