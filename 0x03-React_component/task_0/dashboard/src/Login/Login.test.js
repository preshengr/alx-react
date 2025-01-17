import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  describe('Render correct tags', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Login />);
    });

    it('renders 2 input tags', () => {
      expect(wrapper.find('input')).toHaveLength(2);
    });

    it('renders 2 label tags', () => {
      expect(wrapper.find('label')).toHaveLength(2);
    });
  });
});
