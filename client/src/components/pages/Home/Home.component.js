import React from 'react';

const Home = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="mainTitle">HOTEL FINDER</h1>
      <div className="inputs">
        <input/>
        <button>Find</button>
      </div>
    </div>
  );
};

export default Home;
