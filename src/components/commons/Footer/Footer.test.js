import React from 'react';
import { render } from '@testing-library/react';
import { ParallaxProvider } from 'react-scroll-parallax'

import Footer from './Footer.component';

const props = {
  className: 'className',
};

describe('<AboutUs />', () => {
  const { container } = render(
    <ParallaxProvider>
      <Footer {...props} />,
    </ParallaxProvider>
  );

  it('match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
