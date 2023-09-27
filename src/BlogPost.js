// BlogPost.js

import React, { useState } from 'react';
import './BlogPost.css'; // Import the CSS file

function BlogPost({ post }) {
  
  // Initialize a state variable showFullPost:
  // uses the useState hook to initialize a state variable showFullPost with an initial value of false.
  const [showFullPost, setShowFullPost] = useState(false);


  // Define openFullPost and closeFullPost functions:
  const openFullPost = () => {

    // sets the showFullPost state to true when called.
    setShowFullPost(true);
  };

  const closeFullPost = () => {

    // sets the showFullPost state to false when called.
    setShowFullPost(false);
  };

  // renders a div element with the class name 'blog-post'. The class name is conditionally modified based on the showFullPost state using template literals.
  return (
    <div className={`blog-post ${showFullPost ? 'active' : ''}`}>

{/* displays an img element with the URL from post.thumbnail.large and sets the alt attribute to post.title. */}
      <img src={post.thumbnail.large} alt={post.title} />

      {/* renders an h2 element with the title from post.title. */}
      <h2>{post.title}</h2>

      {/* If showFullPost is true, it displays a div with the class 'full-post', which contains the post's content in a p element and a 'Close' button that triggers the closeFullPost function when clicked. */}
      {showFullPost ? (
        <div className="full-post">
          <p>{post.content}</p>
          <button onClick={closeFullPost}>Close</button>
        </div>
      ) : (
        // If showFullPost is false, it displays a 'Read More' button that triggers the openFullPost function when clicked.
        <button onClick={openFullPost}>Read More</button>
      )}
    </div>
  );
}

export default BlogPost;
