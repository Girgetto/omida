import React from 'react';

const Home = ({ className }) => {
  return (
    <div className={className}>
      <section className="firstSection">
        <h1 className="mainTitle">HOTEL FINDER</h1>
      </section>
      <section className="secondSection">
        <p>
          We are an elite security firm specializing in identifying risk and
          developing customized solutions for high profile clients.
        </p>
      </section>
      <section className="thirdSection">
        <h1>Hotel Deal</h1>
        <div className="content">
          <div className="left-content">
            <img
              className="deal-image"
              src="https://i.ibb.co/QjsYCbJ/isaac-benhesed-249429-unsplash-1.png"
              alt="deal"
            />
          </div>
          <div className="right-content">
            <p>Best Apartment</p>
            <button>From 1000€ per month</button>
          </div>
        </div>
      </section>
      <section className="fourthSection">
        <h1 className="main-title">Our Agents</h1>
        <div className="fourth-main">
          <div className="main-inner">
            <h1>Want to Sell Property?</h1>
            <p>
              Let us create a tailored strategic marketing plan and keep track
              of the selling process.
            </p>
            <button>More Details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
