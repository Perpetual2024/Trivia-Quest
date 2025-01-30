import React from 'react';

const BookmarkButton = ({ isBookmarked, onClick }) => {
  return (
    <button onClick={onClick}>
      {isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
    </button>
  );
}

export default BookmarkButton;
