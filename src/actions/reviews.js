export const REQUEST_REVIEWS  = 'REQUEST_REVIEWS';
export const RECEIVE_REVIEWS  = 'RECEIVE_REVIEWS';

export const requestReviews = () => ({
  type: REQUEST_REVIEWS,
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews: reviews,
  receivedAt: Date.now()
})

/* TODO:
  - [] Fetch the main URI from a environment variable;
  - [] Receive the app name as parameter;
*/
uri = 'http://localhost:5000/product-upsell/reviews'
export const fetchReviews = () => (dispatch) => {
  dispatch(requestReviews())
  return fetch(uri)
    .then(response => response.json())
    .then(data => dispatch(receiveReviews(data)))
}
