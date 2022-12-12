import { render } from '@testing-library/react';

import CoreShared from './core-shared';

describe('CoreShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreShared />);
    expect(baseElement).toBeTruthy();
  });
});
