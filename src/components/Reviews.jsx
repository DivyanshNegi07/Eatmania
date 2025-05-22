
import React from 'react';
import '../styles/ReviewSlider.css';

const reviews = [
  {
    name: "Amit Sharma",
    review: "Quick delivery and the burger was hot and fresh. Loved the experience!",
    rating: 5
  },
  {
    name: "Priya Mehta",
    review: "Good variety of options. Could improve on packaging.",
    rating: 4
  },
  {
    name: "Rahul Verma",
    review: "Exceptional service and great quality. Will order again!",
    rating: 5
  },
  {
    name: "Neha Gupta",
    review: "Delivery was a bit late but food was tasty.",
    rating: 3
  },
  {
    name: "Ankit Tiwari",
    review: "Smooth experience and delicious food. Highly recommended.",
    rating: 5
  },
  {
    name: "Sanya Arora",
    review: "Could improve on speed. Food was okay.",
    rating: 3
  },
];

function ReviewSlider() {
  return (
    <div className="review-slider-container">
      <h2 className="slider-title">What Our Customers Say</h2>
      <div className="review-slider">
        {reviews.map((item, index) => (
          <div className="review-slide" key={index}>
            <div className="review-content">
              <p className="review-text">"{item.review}"</p>
              <div className="review-info">
                <span className="review-name">— {item.name}</span>
                <span className="review-stars">{"⭐".repeat(item.rating)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewSlider;

