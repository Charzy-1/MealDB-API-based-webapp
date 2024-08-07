// Import CSS file
import '../public/styles.css';

// Import image using Webpack's file-loader
import likeIcon from '../src/img/heart.png';

import { fetchMealsByLetter, fetchLikes, postLike } from './api.js';

const mealContainer = document.getElementById('meal-container');
const mealCountElement = document.getElementById('meal-count');

const displayMeals = async () => {
  const meals = await fetchMealsByLetter('a');  // Fetch meals by letter 'a'
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
          <img src="${likeIcon}" alt="Like"> <!-- Use the imported image here -->
          <span>${likesCount}</span>
        </div>
        <button class="comments-button" data-id="${meal.idMeal}">comments</button>
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
    commentsButton.addEventListener('click', () => {
      // Open comments popup (implement this function)
      openCommentsPopup(meal.idMeal);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  displayMeals();
});

// Implement openCommentsPopup function
const openCommentsPopup = (mealId) => {
  // Your implementation for the comments popup
};
