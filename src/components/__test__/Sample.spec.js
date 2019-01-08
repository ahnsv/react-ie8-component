import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Sample from '../Sample'

describe('Sample', () => {
    it('should be defined', () => {
      expect(Sample).toBeDefined();
    });
    it('should render correctly', () => {
      const tree = shallow(
        <Sample name='Sample test' />
      );
      expect(tree).toMatchSnapshot();
    });
   });