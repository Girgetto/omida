import React from 'react';

const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const title = {
  fontSize: '24px'
};

const paraph = {
  color: 'rgba(255, 255, 255, 0.6)'
};

const ThirdSection = () => {
  return (
    <section
      style={{
        ...flexCenter,
        height: '200px'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={title}>About</h1>
        <p style={paraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae odio
          magnam, porro esse necessitatibus saepe asperiores totam veritatis
          quia ullam ducimus veniam quo in. Vel, ratione? Vel repudiandae minus
          aliquid!
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1 style={title}>Service</h1>
        <p style={paraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae odio
          magnam, porro esse necessitatibus saepe asperiores totam veritatis
          quia ullam ducimus veniam quo in. Vel, ratione? Vel repudiandae minus
          aliquid!
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1 style={title}>Ipsum</h1>
        <p style={paraph}>
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
