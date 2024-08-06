/* const MEALDB_API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=oXx21ZUp5lDXYvGvUrcW';
const INVOLVEMENT_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oXx21ZUp5lDXYvGvUrcW/likes/';

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
}; */

const MEALDB_API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=oXx21ZUp5lDXYvGvUrcW';
const INVOLVEMENT_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oXx21ZUp5lDXYvGvUrcW/likes/';

export const fetchMeals = async () => {
  try {
    const response = await fetch(MEALDB_API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.meals || [];  // Ensure it returns an empty array if `data.meals` is undefined
  } catch (error) {
    console.error('Failed to fetch meals:', error);
    return [];  // Return an empty array in case of error
  }
};

export const fetchLikes = async () => {
  try {
    const response = await fetch(INVOLVEMENT_API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data || [];  // Ensure it returns an empty array if `data` is undefined
  } catch (error) {
    console.error('Failed to fetch likes:', error);
    return [];  // Return an empty array in case of error
  }
};

export const addLike = async (itemId) => {
  try {
    await fetch(INVOLVEMENT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: itemId }),
    });
  } catch (error) {
    console.error('Failed to add like:', error);
  }
};

