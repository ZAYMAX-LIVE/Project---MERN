import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FullPost = () => {
    const {title} = useParams()
    //console.log(title)
    const [data, setData] = useState([])

    function getBlogPost(){
        axios.get('api/auth/create')
        .then((response)=>{
            const data = response.data
            setData(data)
            //console.log('Data ok!', data)
        })
        .catch(()=>{
            console.log('error')
        })
    }
    useEffect(()=>{
        getBlogPost()
    }, [])
    //console.log(data)
  return(
      <section className='full_post'>
          {data.filter(post => post.title === title).map((post, index)=>{
            {
                console.log(post.title)
                console.log(post.description)
            }
            return(
            <div key={index}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
            )
          })}
      </section>
  );
};

export default FullPost;
