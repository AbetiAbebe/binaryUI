import { render } from '@testing-library/react';

import CoreSharedAssets from './core-shared-assets';

describe('CoreSharedAssets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreSharedAssets />);
    expect(baseElement).toBeTruthy();
  });
});
