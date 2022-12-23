import { render } from '@testing-library/react';

import CoreHome from './core-home';

describe('CoreHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreHome />);
    expect(baseElement).toBeTruthy();
  });
});
