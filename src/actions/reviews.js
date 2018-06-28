export const REQUEST_REVIEWS  = 'REQUEST_REVIEWS';
export const RECEIVE_REVIEWS  = 'RECEIVE_REVIEWS';

export const requestReviews = (app) => ({
  type: REQUEST_REVIEWS,
  app_requested: app,
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews: reviews,
  receivedAt: Date.now()
})

/* TODO: Fetch this from a environment variable */
uri = 'http://localhost:5000/'
export const fetchReviews = (app) => (dispatch) => {
  dispatch(requestReviews(app))
  return fetch(uri)
    .then(response => response.json())
    .then(data => dispatch(receiveReviews(data)))
}
