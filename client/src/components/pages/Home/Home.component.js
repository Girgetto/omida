import React from 'react';

const Home = ({ className }) => {
  return (
    <div className={className}>
      <section className="firstSection">
        <h1 className="mainTitle">HOTEL FINDER</h1>
        <div className="inputs">
          <input placeholder="Inserisci una direzione" />
          <button>Find</button>
        </div>
      </section>
      <section className="secondSection">
        <p>CASAROYAL REAL ESTATE AGENCY</p>
        <h1>Featured Properties</h1>
      </section>
    </div>
  );
};

export default Home;
