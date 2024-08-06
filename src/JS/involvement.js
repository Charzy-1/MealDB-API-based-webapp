const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UrgQm7RyKhohgsiKlIZF/likes';

export const fetchComments = async (mealId) => {
  const response = await fetch(`${involvementApiUrl}?item_id=${mealId}`);
  const data = await response.json();
  return data;
};

export const postComment = async (mealId, username, comment) => {
  await fetch(involvementApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: mealId, username, comment })
  });
};
