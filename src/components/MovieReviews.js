// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map(review => 
        <div className="review">{review.byline}</div>
      )}
    </div>
  )
};

export default MovieReviews;