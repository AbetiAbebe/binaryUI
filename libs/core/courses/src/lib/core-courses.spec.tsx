import { render } from '@testing-library/react';

import CoreCourses from './core-courses';

describe('CoreCourses', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreCourses />);
    expect(baseElement).toBeTruthy();
  });
});
