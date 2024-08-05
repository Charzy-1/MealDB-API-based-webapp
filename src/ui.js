// ui.js
import { fetchMeals, fetchLikes, addLike } from './api.js';

// Get references to the DOM elements where we will display the meals and the spaceship count
const mealList = document.getElementById('meal-list');
const spaceshipCount = document.getElementById('spaceship-count');

// Function to fetch and display meals along with their like counts
const displayMeals = async () => {
  // Fetch meals data from the MealDB API
  const meals = await fetchMeals();
  // Fetch likes data from the Involvement API
  const likes = await fetchLikes();
  
  // Update the spaceship count in the navigation menu
  spaceshipCount.textContent = `(${meals.length})`;

  // Clear the current list of meals in the DOM
  mealList.innerHTML = '';

  // Loop through each meal and create a list item for it
  meals.forEach(meal => {
    // Find the like count for the current meal or set it to 0 if not found
    const likeCount = likes.find(like => like.item_id === meal.idMeal)?.likes || 0;

    // Create a new list item element for the meal
    const mealItem = document.createElement('li');
    // Set the inner HTML of the list item with the meal details and buttons
    mealItem.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h2>${meal.strMeal}</h2>
      <button class="like-btn" data-id="${meal.idMeal}">
        <span>❤</span> ${likeCount} likes
      </button>
      <button class="comment-btn" data-id="${meal.idMeal}">Comments</button>
    `;
    // Append the list item to the meal list in the DOM
    mealList.appendChild(mealItem);
  });

  // Add event listeners to the like buttons
  document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', async (event) => {
      // Get the item ID from the data-id attribute of the button
      const itemId = event.target.closest('button').dataset.id;
      // Add a like for the item using the API
      await addLike(itemId);
      // Refresh the meal list to update the like counts
      displayMeals();
    });
  });

  // TODO: Add event listeners for comments buttons here
};

// When the DOM content is loaded, fetch and display the meals
document.addEventListener('DOMContentLoaded', displayMeals);
