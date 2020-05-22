import React from 'react';
import { render } from '@testing-library/react';
import { ParallaxProvider } from 'react-scroll-parallax'

import Services from './Services.component';

const props = {
  className: 'className',
};

describe('<Services />', () => {
  const { container } = render(
    <ParallaxProvider>
      <Services {...props} />,
    </ParallaxProvider>
  );

  it('match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
