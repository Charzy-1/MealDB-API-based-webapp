// index.test.js
import { countItems, countComments } from '../js/util.js';

test('countItems returns correct number of items', () => {
  const items = ['item1', 'item2', 'item3'];
  expect(countItems(items)).toBe(3);
});

test('countComments returns correct number of comments', () => {
  const comments = ['comment1', 'comment2'];
  expect(countComments(comments)).toBe(2);
});
