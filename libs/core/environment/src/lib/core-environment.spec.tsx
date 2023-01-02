import { render } from '@testing-library/react';

import CoreEnvironment from './core-environment';

describe('CoreEnvironment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreEnvironment />);
    expect(baseElement).toBeTruthy();
  });
});
