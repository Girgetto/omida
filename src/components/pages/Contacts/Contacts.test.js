import React from 'react';
import { render } from '@testing-library/react';
import { ParallaxProvider } from 'react-scroll-parallax'

import Contacts from './Contacts.component';

const props = {
  className: 'className',
};

describe('<Contacts />', () => {
  const { container } = render(
    <ParallaxProvider>
      <Contacts {...props} />,
    </ParallaxProvider>
  );

  it('match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
