import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Sample from '../Sample'
const configure = require("enzyme").configure;
const Adapter = require("enzyme-adapter-react-14");
configure({ adapter: new Adapter() });

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