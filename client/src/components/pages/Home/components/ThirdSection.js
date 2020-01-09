import React from 'react';

const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const ThirdSection = () => {
  return (
    <section
      style={{
        ...flexCenter,
        height: '200px'
      }}
    >
      <div style={{ textAlign: 'center'}}>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae odio
          magnam, porro esse necessitatibus saepe asperiores totam veritatis
          quia ullam ducimus veniam quo in. Vel, ratione? Vel repudiandae minus
          aliquid!
        </p>
      </div>
      <div style={{ textAlign: 'center'}}>
        <h1>Service</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae odio
          magnam, porro esse necessitatibus saepe asperiores totam veritatis
          quia ullam ducimus veniam quo in. Vel, ratione? Vel repudiandae minus
          aliquid!
        </p>
      </div>
      <div style={{ textAlign: 'center'}}>
        <h1>Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae odio
          magnam, porro esse necessitatibus saepe asperiores totam veritatis
          quia ullam ducimus veniam quo in. Vel, ratione? Vel repudiandae minus
          aliquid!
        </p>
      </div>
    </section>
  );
};

export default ThirdSection;
