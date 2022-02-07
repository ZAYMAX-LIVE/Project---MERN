import React, { useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import PostsPage from './PostsPage';


const CreatePage = () => {

  const {loading, request} = useHttp()
  const [form, setForm] = useState({
    title:'', description:''
  })
  const handleForm = event =>{
    setForm({...form, [event.target.name]: event.target.value})
  }
  const createPost = async () =>{
    try{
      const data = await request('api/auth/create', 'POST', {...form})
      console.log(data)
    }
    catch(e){

    }
  }


  return(
    <section>
      <div>
          <h1>Create Page</h1>
          <input 
            type="text"
            placeholder='Title'
            id='title'
            name='title'
            onChange={handleForm}
          />
          <input 
            type="text"
            placeholder='Description'
            id='description'
            name='description'
            onChange={handleForm}
          />
          <button onClick={createPost} disabled={loading}>Create</button>
      </div>
      <PostsPage/>
      </section>
  );
};

export default CreatePage;