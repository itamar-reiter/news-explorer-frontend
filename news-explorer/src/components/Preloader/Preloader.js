import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__animation" />
      <h2 className="preloader__title">Searching for news...</h2>
    </div>
  );
}

export default Preloader;
