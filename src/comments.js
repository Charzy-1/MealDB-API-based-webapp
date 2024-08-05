import { fetchComments, addComment } from './api.js';

const displayComments = async (itemId) => {
  const comments = await fetchComments(itemId);
  // Display comments in the popup
};

const handleCommentSubmit = async (event) => {
  event.preventDefault();
  const itemId = event.target.dataset.id;
  const commentText = event.target.querySelector('input').value;
  await addComment(itemId, commentText);
  displayComments(itemId);
};


