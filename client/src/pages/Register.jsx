import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../controlls/FormInput';
import { addUser } from '../utils/users';
// import { contextData } from '../dataBase/context';
import { schema } from '../utils/validateSchema';
function Register() {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  // const {setUserData} = useContext(contextData)
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log({
        userName:values.userName,
        email:values.email,
        password:values.password
      });
      axios.post('http://localhost:8800/api/auth/register',{
        userName:values.userName,
        email:values.email,
        password:values.password
      }).then(responce => {
        dispatch(addUser(responce.data))
        console.log(responce.data)
       Navigate('/')
      })
    } catch (error) {
      console.log(error);
    }
   
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-box2 bg-gray flex f-column padding">
    <form className='bg-gray flex f-column flow text-white' onSubmit={handleSubmit}>
      
      {schema(values).signUp.map(input=>{

      return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      })}
      <div className='flow'>
        <div className='flex ' >
         
        <input className='none' type="checkbox" name="remmember" id="remmember" />
        <label className='custom-check' htmlFor="remmember"></label>
        <span className='checkbox-text'>Remmember me</span>
        </div>
        <div className='flex ' >
         
        <input className='none' type="checkbox" name="terms" id="terms" />
        <label className='custom-check' htmlFor="terms"></label>
        <span className='checkbox-text'>I have raccepted the <span className='text-main'>terms and conditions</span></span>
        </div>
      
      
      </div>
      <input className='submit ' type="submit" value={'Login Now'} />
    </form>
    </div>
  )
}

export default Register