import React, { useState } from 'react';

const Comment = ({ comments, onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddComment(comment);
    setComment('');
  };

  return (
    <div className="comment-section">
      <div className="comments">
        {comments.map(c => (
          <div key={c.id} className="comment">
            <p>{c.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={comment} 
          onChange={e => setComment(e.target.value)} 
          placeholder="Add a comment" 
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
}

export default Comment;
