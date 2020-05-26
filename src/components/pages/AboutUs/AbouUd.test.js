import React from 'react';
import { render } from '@testing-library/react';
import { ParallaxProvider } from 'react-scroll-parallax'

import AboutUs from './Contacts.component';

const props = {
  className: 'className',
};

describe('<AboutUs />', () => {
  const { container } = render(
    <ParallaxProvider>
      <AboutUs {...props} />,
    </ParallaxProvider>
  );

  it('match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
