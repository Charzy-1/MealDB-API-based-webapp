import { fetchComments } from './api.js';

fetchComments().then(comments => {
  console.log('Comments:', comments);
});
