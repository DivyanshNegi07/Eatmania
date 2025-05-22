import React from 'react';
import '../styles/StaticPage.css';

function GetHelp() {
  return (
    <div className="static-page">
      <h1>Get Help</h1>
      <p>Need assistance? We're here to support you:</p>
      <ul>
        <li>Call our support team: +91-123-456-7890</li>
        <li>Email: support@eatmania.com</li>
        <li>Live chat available from 9AM to 9PM</li>
        <li>FAQs available in Help section</li>
      </ul>
    </div>
  );
}

export default GetHelp;