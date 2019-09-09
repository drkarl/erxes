import { mount, shallow } from 'enzyme';
import FullPreviewStep from 'modules/forms/components/step/FullPreviewStep';
import React from 'react';

describe('FullPreviewStep component', () => {
  const defaultProps = {
    type: 'string',
    color: 'red',
    theme: 'default',
    onChange: (name: 'carousel', value: string) => null,
    carousel: 'carousel'
  };

  test('renders shallow successfully', () => {
    shallow(<FullPreviewStep {...defaultProps} />);
  });
});