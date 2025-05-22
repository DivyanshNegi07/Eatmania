import React from 'react';
import '../styles/StaticPage.css';

function PrivacyPolicy() {
  return (
    <div className="static-page">
      <h1>Privacy Policy</h1>
      <p>We respect your privacy and are committed to protecting your personal data. Here's how we handle your information:</p>
      <ul>
        <li>We collect your name, contact info, and order history.</li>
        <li>Your data is used to improve delivery and user experience.</li>
        <li>We never share or sell your data without consent.</li>
        <li>All transactions are encrypted for your safety.</li>
      </ul>
    </div>
  );
}

export default PrivacyPolicy;