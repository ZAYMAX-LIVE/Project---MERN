import React from 'react';
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import BlogPost from '../components/BlogPost'
import FullPost from '../components/FullPost'


class PostsPage extends React.Component {

    state = {
        posts: []
    }
    componentDidMount = () =>{
        this.getBlogPost();
    }
    
    getBlogPost = () =>{
        axios.get('api/auth/create')
        .then((response)=>{
            const data = response.data
            this.setState({posts: data})
            //console.log('Data ok!', data)
        })
        .catch(()=>{
            console.log('error')
        })
    }
    /*displayPosts = (posts) =>{
        return posts.map((post, index)=>{
            <Link to={`/posts/${post.title}`}>
                 <div key={index} id={index}>
                 <h2>{post.title}</h2>
                 <p>{post.description}</p>
             </div> 
             </Link>
        })
    }*/
    
  render(){
      return(
          <section className='posts'>
          <Routes>
            <Route path="/:title" element={<FullPost posts={this.state.posts}/>} />
            <Route path="/" element={<BlogPost posts={this.state.posts}/>} />
          </Routes>
          </section>
      )
    }
};

export default PostsPage

/*
{this.state.posts.map((post, index)=>(
                  <Link to={`/posts/${post.title}`}>
                 <div key={index} id={index}>
                 <h2>{post.title}</h2>
                 <p>{post.description}</p>
             </div> 
             </Link>
              ))}
*/