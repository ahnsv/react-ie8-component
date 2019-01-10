import React from 'react';
import { shallow } from 'enzyme';

import Test from '../Test'
const configure = require("enzyme").configure;
const Adapter = require("enzyme-adapter-react-14");
configure({ adapter: new Adapter() });

describe('Test', () => {
    it('should be defined', () => {
      expect(Test).toBeDefined();
    });
    it('should render correctly', () => {
      const tree = shallow(
        <Test name='Test test' />
      );
      expect(tree).toMatchSnapshot();
    });
   });