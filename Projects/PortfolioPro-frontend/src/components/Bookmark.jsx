import { useState, useEffect } from 'react';

const Bookmark = ({ projectId }) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    // Check if the project is already bookmarked by the current user
    const checkBookmark = async () => {
      try {
        const response = await fetch(`/api/bookmarks/${projectId}`);
        const data = await response.json();
        setBookmarked(data.isBookmarked); // Assuming API returns a flag
      } catch (error) {
        console.error('Error checking bookmark:', error);
      }
    };

    checkBookmark();
  }, [projectId]);

  const handleBookmarkToggle = async () => {
    try {
      if (bookmarked) {
        await fetch(`/api/bookmarks/${projectId}`, { method: 'DELETE' });
      } else {
        await fetch('/api/bookmarks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ projectId }),
        });
      }
      setBookmarked(!bookmarked);
    } catch (error) {
      console.error('Error bookmarking project:', error);
    }
  };

  return (
    <button onClick={handleBookmarkToggle}>
      {bookmarked ? 'Unbookmark' : 'Bookmark'}
    </button>
  );
};

export default Bookmark;