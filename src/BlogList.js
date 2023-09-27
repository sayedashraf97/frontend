// BlogList.js
//import use state and use effect from react library
import React, { useEffect, useState } from 'react';

//import fetchPosts function from './api'
import { fetchPosts } from './api';

//blogpost component from blogpost
import BlogPost from './BlogPost';

//css file from bloglist.css
import './BlogList.css'; // Import the CSS file

//define bloglist component
function BlogList() {

//Initialize a state variable post
  //use the usestate hook to initialize a state variable with an empty array
  const [posts, setPosts] = useState([]);

  //useeffect hook will call the fetchposts function when componet is mounted empty array is passed as dependency array so it runs once
  useEffect(() => {
    fetchPosts()

    //when promise returned by fetchposts is resolved sets the data received from an API as the new value of posts using setPosts
      .then((data) => setPosts(data))

    
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  //In the return statement it renders a div element with clssname blog-list
  return (
    <div className="blog-list">
      {/* maps through posts array and renders a div element for each post setting a unique key based on posts id and aplying a CSS class based on index */}
      {posts.map((post, index) => (
        <div key={post.id} className={`blog-post-container post-${index}`}>
          {/* use blog post component and passes the post as prop to it */}
          <BlogPost post={post} />
        </div>
      ))}
    </div>
  );
}

export default BlogList;
