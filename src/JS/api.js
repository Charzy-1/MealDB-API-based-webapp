const mealApiUrl = 'https://www.themealdb.com/api/json/v1/1';
const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UrgQm7RyKhohgsiKlIZF/likes';

export const fetchMeals = async (searchQuery) => {
  const response = await fetch(`${mealApiUrl}/search.php?s=${searchQuery}`);
  const data = await response.json();
  return data.meals;
};

export const fetchMealDetails = async (mealId) => {
  const response = await fetch(`${mealApiUrl}/lookup.php?i=${mealId}`);
  const data = await response.json();
  return data.meals[0];
};

export const fetchLikes = async () => {
  const response = await fetch(involvementApiUrl);
  const data = await response.json();
  return data;
};

export const postLike = async (mealId) => {
  await fetch(involvementApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: mealId })
  });
};
