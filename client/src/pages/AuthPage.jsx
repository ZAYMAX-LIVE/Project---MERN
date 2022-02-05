import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/msg.hook';
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../hooks/auth.hook';


const AuthPage = () => {
  const auth = useContext(AuthContext)
  const {loading, request} = useHttp()

  
  //const message = useMessage()
  const [form, setForm] = useState({
    name:'', password:''
  })
  const handleChange = event =>{
    setForm({...form, [event.target.name]: event.target.value})
  }

  //регистрация пользователя
  const handlerRegister = async () =>{
    try{
      const data = await request('/api/auth/register','POST',{...form})
      console.log(data)
    }
    catch(e){}
  }
  //вход пользователя
  const loginRegister = async () =>{
    try{
      const data = await request('/api/auth/login','POST',{...form})
      auth.login(data.token, data.userId)
    }
    catch(e){}
  }

  return(
      <div>
          <h1>Auth Page</h1>
          <div className='form'>
              <input 
              type="text"
              placeholder='Name'
              id='name'
              name='name'
              value={form.name}
              onChange={handleChange}
              />
              <input 
              type="password"
              placeholder='Password'
              id='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              />
          </div>
          <div className='form-butt'>
            <button onClick={loginRegister} disabled={loading}>Login</button>
            <button onClick={handlerRegister} disabled={loading}>Register</button>
          </div>
      </div>
  );
};

export default AuthPage;
