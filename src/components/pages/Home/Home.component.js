import React, { Suspense } from 'react';
import * as Comp from './components';

const Home = ({ className }) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className={className}>
        <Comp.FirstSection />
        <Comp.SecondSection />
        <Comp.ThirdSection />
        <Comp.OurMission />
        <Comp.FirstSquares />
      </div>
    </Suspense>
  );
};

export default Home;
