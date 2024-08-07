export const fetchMealsByLetter = async (letter) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const data = await response.json();
  return data.meals || [];
};

export const fetchLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UrgQm7RyKhohgsiKlIZF/likes');
  const data = await response.json();
  return data;
};

export const postLike = async (mealId) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UrgQm7RyKhohgsiKlIZF/likes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: mealId }),
  });
};
