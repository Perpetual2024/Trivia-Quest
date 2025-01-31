import { useState, useEffect } from 'react';

const Comments = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [comments, setComments] = useState([]); // Ensure this is initialized as an array
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch available projects for the user to comment on
  useEffect(() => {
    const fetchProjects = async () => {
      setLoadingProjects(true);
      try {
        const response = await fetch('http://127.0.0.1:5555/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setErrorMessage('Error fetching projects: ' + error.message);
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchProjects();
  }, []);

  // Fetch existing comments for the selected project
  useEffect(() => {
    if (selectedProjectId) {
      setLoadingComments(true);
      const fetchComments = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5555/comment/${selectedProjectId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch comments');
          }
          const data = await response.json();
          setComments(Array.isArray(data) ? data : []); // Ensure comments is always an array
        } catch (error) {
          setErrorMessage('Error fetching comments: ' + error.message);
        } finally {
          setLoadingComments(false);
        }
      };

      fetchComments();
    }
  }, [selectedProjectId]);

  // Handle comment submission
  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (!userId || !selectedProjectId || !content) {
      alert('Please fill out all fields: user ID, select a project, and enter a comment.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5555/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          project_id: selectedProjectId,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit comment');
      }

      // Reset form after submission
      setContent('');
      setUserId('');
      // Re-fetch comments
      const data = await response.json();
      setComments(Array.isArray(data) ? data : []); // Ensure comments is always an array
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('Error submitting comment: ' + error.message);
    }
  };

  return (
    <div>
      <h3>Comments</h3>

      {/* Error message display */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Comment form */}
      <form onSubmit={handleSubmitComment}>
        <label htmlFor="user_id">User ID:</label>
        <input
          id="user_id"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // Update userId state
          placeholder="Enter your user ID"
        />

        <label htmlFor="project">Select Project:</label>
        <select
          id="project"
          value={selectedProjectId}
          onChange={(e) => setSelectedProjectId(e.target.value)}
        >
          <option value="">Select a project</option>
          {loadingProjects ? (
            <option>Loading projects...</option>
          ) : (
            projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))
          )}
        </select>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Submit</button>
      </form>

      {/* Displaying existing comments */}
      <h4>Existing Comments</h4>
      {loadingComments ? (
        <p>Loading comments...</p>
      ) : (
        <ul>
          {Array.isArray(comments) && comments.length > 0 ? (
            comments.map((comment) => (
              <li key={comment.id}>
                <p>
                  <strong>User {comment.user_id}</strong>: {comment.content}
                </p>
              </li>
            ))
          ) : (
            <p>No comments available.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Comments;

