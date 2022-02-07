import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = ({posts}) => {
  return(
      <>
          {posts.map((post, index)=>(
                  <Link to={`/${post.title}`} key={index}>
                 <div id={index}>
                 <h2>{post.title}</h2>
                 <p>{post.description}</p>
             </div> 
             </Link>
              ))}
      </>
  );
};
export default BlogPost

