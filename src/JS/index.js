// Import CSS file
import '../../public/styles.css';

// Import image using Webpack's file-loader
import likeIcon from '../img/heart.png';

import { fetchMeals, fetchLikes, postLike } from './api.js';
import { fetchComments, postComment } from './involvement.js';

const mealContainer = document.getElementById('meal-container');
const mealCountElement = document.getElementById('meal-count');

const displayMeals = async () => {
  try {
    const meals = await fetchMeals();  
    const likes = await fetchLikes();

    mealCountElement.textContent = meals.length;

    mealContainer.innerHTML = '';  // Clear the container first

    meals.forEach(meal => {
      const mealLikes = likes.find(like => like.item_id === meal.idMeal);
      const likesCount = mealLikes ? mealLikes.likes : 0;

      const mealCard = document.createElement('div');
      mealCard.classList.add('meal-card');

      mealCard.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="meal-info">
          <h3>${meal.strMeal}</h3>
          <div class="likes-comments">
            <div class="like-button" data-id="${meal.idMeal}">
              <img src="${likeIcon}" alt="Like"> <!-- Use the imported variable here -->
              <span>${likesCount}</span>
            </div>
            <button class="comments-button" data-id="${meal.idMeal}">Comments</button>
          </div>
        </div>
      `;

      mealContainer.appendChild(mealCard);

      // Add event listener to the like button
      const likeButton = mealCard.querySelector('.like-button');
      likeButton.addEventListener('click', async () => {
        await postLike(meal.idMeal);
        likeButton.querySelector('span').textContent = parseInt(likeButton.querySelector('span').textContent, 10) + 1;
      });

      // Add event listener to the comments button
      const commentsButton = mealCard.querySelector('.comments-button');
      commentsButton.addEventListener('click', async () => {
        const comments = await fetchComments(meal.idMeal);
        openCommentsPopup(meal, comments);
      });
    });
  } catch (error) {
    console.error('Error displaying meals:', error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  displayMeals();
});

// Implement openCommentsPopup function
const openCommentsPopup = (meal, comments) => {
  // Create popup container
  const popup = document.createElement('div');
  popup.classList.add('popup');

  // Generate comments list HTML
  const commentsListHTML = comments.map(comment => `
    <li>${comment.creation_date} add a new comment: ${comment.username} says: ${comment.comment}</li>
  `).join('');

  // Set popup content
  popup.innerHTML = `
    <div class="popup-content">
      <button class="close-popup">&times;</button>
      <h2>${meal.strMeal}</h2>
      <p>Area: ${meal.strArea}</p>
      <p>Category: ${meal.strCategory}</p>
      <div>
        <h3>Comments (${comments.length})</h3>
        <ul id="comments-list">
          ${commentsListHTML}
        </ul>
      </div>
      <div>
        <h3>Add a comment</h3>
        <input type="text" id="comment-username" placeholder="Your name">
        <textarea id="comment-text" placeholder="Your insights"></textarea>
        <button id="submit-comment">Comment</button>
      </div>
    </div>
  `;

  document.body.appendChild(popup);

  // Close popup
  popup.querySelector('.close-popup').addEventListener('click', () => {
    document.body.removeChild(popup);
  });

  // Handle comment submission
  document.getElementById('submit-comment').addEventListener('click', async () => {
    const username = document.getElementById('comment-username').value;
    const comment = document.getElementById('comment-text').value;

    if (username && comment) {
      await postComment(meal.idMeal, username, comment);
      const updatedComments = await fetchComments(meal.idMeal);
      const commentsList = document.getElementById('comments-list');
      commentsList.innerHTML = updatedComments.map(comment => `
        <li>${comment.creation_date} add a new comment: ${comment.username} says: ${comment.comment}</li>
      `).join('');
    }
  });
};
