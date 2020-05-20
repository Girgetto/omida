import React from 'react';
import { render } from '@testing-library/react';
import { ParallaxProvider } from 'react-scroll-parallax'

import Home from './Home.component';

const props = {
  className: 'className',
};

describe('<Home />', () => {
  const { container } = render(
    <ParallaxProvider>
      <Home {...props} />,
    </ParallaxProvider>
  );

  it('match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
