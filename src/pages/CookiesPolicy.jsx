import React from 'react';
import '../styles/StaticPage.css';

function CookiesPolicy() {
  return (
    <div className="static-page">
      <h1>Cookies Policy</h1>
      <p>Our website uses cookies to ensure you get the best experience on our platform.</p>
      <ul>
        <li>Cookies store user preferences and session info.</li>
        <li>You can disable cookies via your browser settings.</li>
        <li>Some features may not work correctly without cookies.</li>
      </ul>
    </div>
  );
}

export default CookiesPolicy;