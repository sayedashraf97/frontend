// Modal.js

import React from 'react';
import './Modal.css'; // Import the CSS file

// Modal is a functional React component that takes two props: post and onClose.
function Modal({ post, onClose }) {

  // In the return statement, it renders a div element with the class name 'modal'. This div represents the modal overlay.
  return (
    <div className="modal">
      <div className="modal-content">
      {/* displays the title of the post. */}
        <h2>{post.title}</h2>
        {/* displays the content of the post. */}
        <p>{post.content}</p>
        {/* a 'Close' button at the bottom of the modal content. */}
        {/* attaches an onClick event handler to the button. When clicked, it calls the onClose function passed as a prop. */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
