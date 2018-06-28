import { REQUEST_REVIEWS, RECEIVE_REVIEWS } from '../actions/reviews'

export default function reviews (state = [], action) {
  switch (action.type) {
    case REQUEST_REVIEWS:
      return {
        ...state,
      }
    case RECEIVE_REVIEWS:
      return {
        ...state,
        items: action.reviews,
      }
    default:
      return state;
  }
}
