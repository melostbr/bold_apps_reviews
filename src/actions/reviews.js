import fetch from 'cross-fetch'

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
const uri = 'http://localhost:5000/product-upsell/reviews'

export const fetchReviews = () => (dispatch) => {
  dispatch(requestReviews())
  return fetch(uri, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'true'
      }
    })
    .then(response => response.json())
    .then(data => {
      const reviews = data.shift();
      dispatch(receiveReviews(reviews))
    })
}
