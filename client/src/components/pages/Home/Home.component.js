import React from 'react';
import * as Comp from './components';

const Home = ({ className }) => {
  return (
    <div className={className}>
      <Comp.FirstSection/>
      <Comp.SecondSection/> 
      <Comp.ThirdSection/> 
    </div>
  );
};

export default Home;
