import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e)=> {
        e.preventDefault();
        setUser({name, password});
    };
  return (
    <div>
        <input type="text" placeholder='userName'
         onChange = {(e)=> setName(e.target.value)}
        />
        <input type="text" placeholder='password'
         onChange = {(e)=> setPassword(e.target.value)}
        />
        <button 
        type="submit"
        onClick = {handleSubmit}
        >submit</button>
    </div>
  )
}

export default Login
