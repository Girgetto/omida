import React from 'react';

const Home = ({ className }) => {
  return (
    <div className={className}>
      <h1>Hotel Finder</h1>
      <div>
        <input/>
        <button>Find</button>
      </div>
    </div>
  );
};

export default Home;
