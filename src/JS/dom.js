import { fetchMeals, fetchLikes, postLike } from './api.js';

export const displayMeals = async () => {
  const mealList = document.getElementById('meal-list');
  const meals = await fetchMeals();  // Make sure to call the function
  const likes = await fetchLikes();

  mealList.innerHTML = '';  // Clear the list first

  meals.forEach((meal) => {
    const mealItem = document.createElement('div');
    mealItem.className = 'meal-item';

    const mealName = document.createElement('p');
    mealName.textContent = meal.strMeal;

    const likeButton = document.createElement('img');
    likeButton.src = '../src/img/heart.png';  // Update path if necessary
    likeButton.className = 'like-button';
    likeButton.dataset.id = meal.idMeal;
    likeButton.addEventListener('click', async (e) => {
      await postLike(meal.idMeal);
      updateLikes(e.target.dataset.id);
    });

    mealItem.appendChild(mealName);
    mealItem.appendChild(likeButton);
    mealList.appendChild(mealItem);
  });
};

export const updateLikes = async (mealId) => {
  const likes = await fetchLikes();
  const likeButton = document.querySelector(`img[data-id='${mealId}']`);
  const mealLike = likes.find((like) => like.item_id === mealId);
  likeButton.nextSibling.textContent = mealLike ? mealLike.likes : 0;
};
