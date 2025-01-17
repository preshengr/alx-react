import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';

describe('<App />', () => {
  describe('Does not crash', () => {
    it('renders without crashing', () => {
      shallow(<App />);
    });
  });

  describe('Renders correctly', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('should contain the Notifications component', () => {
      expect(wrapper.find(Notifications)).toHaveLength(1);
    });

    it('should contain the Header component', () => {
      expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('should contain the Login component', () => {
      expect(wrapper.find(Login)).toHaveLength(1);
    });

    it('should contain the Footer component', () => {
      expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('does not display CourseList', () => {
      expect(wrapper.find(CourseList)).toHaveLength(0);
    });
  });

  describe('Handle key press', () => {
    const mockLogout = jest.fn();
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
      mockLogout.mockClear();
      mockAlert.mockClear();
    });

    it('call logOut  and alerts when CTRL+H is pressed', () => {
      const wrapper = shallow(<App isLoggedIn={true} logOut={mockLogout} />);
      const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
      document.dispatchEvent(event);

      expect(mockLogout).toHaveBeenCalled();
      expect(mockAlert).toHaveBeenCalledWith('Logging you out');
    });
  });
});

describe('<App isLoggedIn=true />', () => {
  describe('Displays correct component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('does not display the Login component', () => {
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('renders the CourseList component', () => {
      wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });
});
