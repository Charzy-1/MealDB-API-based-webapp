const MEALDB_API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
const INVOLVEMENT_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yourAppId/likes/';

export const fetchMeals = async () => {
  const response = await fetch(MEALDB_API_URL);
  const data = await response.json();
  return data.meals;
};

export const fetchLikes = async () => {
  const response = await fetch(INVOLVEMENT_API_URL);
  const data = await response.json();
  return data;
};

export const addLike = async (itemId) => {
  await fetch(INVOLVEMENT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });
};
