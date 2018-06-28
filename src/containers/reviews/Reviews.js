import { connect } from 'react-redux';
import React from 'react';
import { fetchReviews } from '../../actions/reviews';

class Reviews extends React.Component {

  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    debugger;
    const reviews = this.props.reviews.items;
    while (!reviews) {
      return <h1>Hold On</h1>
    };

    return (
      <section>
        <ol>
            {
              reviews.map(review =>
                  <li>{review['shopify_domain']}</li>
              )
            }
        </ol>
        {/* TODO: Add a 'next' button where I fetch more data */}
      </section>
    )
  }
}

const MapStateToProps = state => ({
  reviews: state.reviews,
});

const MapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews())
});

export default connect(MapStateToProps, MapDispatchToProps)(Reviews);
