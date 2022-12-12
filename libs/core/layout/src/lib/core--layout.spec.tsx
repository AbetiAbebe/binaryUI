import { render } from '@testing-library/react';

import CoreLayout from './core--layout';

describe('CoreLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreLayout />);
    expect(baseElement).toBeTruthy();
  });
});
