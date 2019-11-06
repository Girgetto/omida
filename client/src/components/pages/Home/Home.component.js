import React from 'react';
import * as Comp from './components';

const houses = new Array(5).fill(0);

const renderHouses = () =>  houses.map(() => <Comp.Card key={Math.random()}/>)

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
        <div className="cardsContainer">
          {renderHouses()}
        </div>
        <button className="all-properties-button">ALL PROPERTIES</button>
      </section> 
      <section className="thirdSection">
        <h1>Hotel Deal</h1>
        <div className="content">
          <div className="left-content">
            <img className="deal-image" src="https://i.ibb.co/QjsYCbJ/isaac-benhesed-249429-unsplash-1.png" alt="deal"/>
          </div>
          <div className="right-content">
            <p>Best Apartment</p>
            <button>From 1000€ per month</button>
          </div>
        </div>
      </section>     
    </div>
  );
};

export default Home;
