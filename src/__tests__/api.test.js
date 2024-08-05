import { fetchMeals, fetchLikes, addLike } from '../api';

test('fetchMeals returns a list of meals', async () => {
  const meals = await fetchMeals();
  expect(meals).toBeInstanceOf(Array);
});

test('fetchLikes returns a list of likes', async () => {
  const likes = await fetchLikes();
  expect(likes).toBeInstanceOf(Array);
});

test('addLike adds a like to an item', async () => {
  await addLike('testItem');
  const likes = await fetchLikes();
  expect(likes.some(like => like.item_id === 'testItem')).toBe(true);
});
