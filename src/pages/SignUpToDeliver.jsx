import React from 'react';
import '../styles/StaticPage.css';

function SignUpToDeliver() {
  return (
    <div className="static-page">
      <h1>Sign Up to Deliver</h1>
      <p>Become a delivery partner and earn with flexible hours:</p>
      <ul>
        <li>Minimum age: 18 years</li>
        <li>Own a bike and a valid license</li>
        <li>Get paid weekly</li>
        <li>Choose your working hours</li>
      </ul>
      <button className="form-btn">Join Now</button>
    </div>
  );
}

export default SignUpToDeliver;