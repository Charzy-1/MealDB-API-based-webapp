import { fetchMeals, fetchLikes, addLike } from './api.js';

const mealList = document.getElementById('meal-list');
const spaceshipCount = document.getElementById('spaceship-count');

const displayMeals = async () => {
  const meals = await fetchMeals();
  const likes = await fetchLikes();
  
  spaceshipCount.textContent = `(${meals.length})`;

  mealList.innerHTML = '';
  meals.forEach(meal => {
    const likeCount = likes.find(like => like.item_id === meal.idMeal)?.likes || 0;
    const mealItem = document.createElement('li');
    mealItem.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h2>${meal.strMeal}</h2>
      <button class="like-btn" data-id="${meal.idMeal}">
        <span>❤</span> ${likeCount} likes
      </button>
      <button class="comment-btn" data-id="${meal.idMeal}">Comments</button>
    `;
    mealList.appendChild(mealItem);
  });

  document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', async (event) => {
      const itemId = event.target.closest('button').dataset.id;
      await addLike(itemId);
      displayMeals();
    });
  });

  // Add event listeners for comments buttons here
};

document.addEventListener('DOMContentLoaded', displayMeals);
