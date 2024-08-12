/* eslint-env jest */

// Importing functions to test
import { countItems, countComments } from '../js/util.js';

// Test for countItems function
test('countItems returns correct number of items', () => {
  const items = ['item1', 'item2', 'item3'];
  expect(countItems(items)).toBe(3);
});

// Test for countComments function
test('countComments returns correct number of comments', () => {
  const comments = ['comment1', 'comment2'];
  expect(countComments(comments)).toBe(2);
});
