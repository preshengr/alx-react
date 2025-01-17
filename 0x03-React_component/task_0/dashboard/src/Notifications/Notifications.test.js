import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('displays div.menuItem when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('does not display div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it('displays div.menuItem when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('displays div.Notifications when displayDrawer is true', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });

  it('renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const wrapper2 = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
    expect(wrapper2.find(NotificationItem)).toHaveLength(0);
  });

  it('renders the right html for the first NotificationItem', () => {
    const firstItem = shallow(<NotificationItem />).first();
    expect(firstItem.html()).toContain('<li></li>');
  });

  it('renders correctly and with the right number of NotificationItem when you pass a list of notifications', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });

  it('displays the message "No new notification for now" and "Here is the list of notifications" is not displayed', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
    expect(wrapper.text()).toContain('No new notification for now');
  });
});
