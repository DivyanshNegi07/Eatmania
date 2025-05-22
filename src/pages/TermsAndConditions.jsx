import React from 'react';
import '../styles/StaticPage.css';

function TermsAndConditions() {
  return (
    <div className="static-page">
      <h1>Terms and Conditions</h1>
      <p>By accessing and using our food delivery service, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all users and visitors.</p>
      <ul>
        <li>All prices listed are inclusive of applicable taxes.</li>
        <li>Orders once placed cannot be cancelled after confirmation.</li>
        <li>Delivery times may vary depending on location and availability.</li>
        <li>Abuse of service may result in a ban or suspension.</li>
      </ul>
    </div>
  );
}

export default TermsAndConditions;