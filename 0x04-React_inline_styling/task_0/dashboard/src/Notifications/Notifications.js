import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';
import './Notifications.css';

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  handleClose() {
    console.log('Close button has been clicked');
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className='menuItem'>Your notifications</div>
        {displayDrawer && (
          <div className='Notifications'>
            <p>
              {listNotifications.length > 0 &&
                'Here is the list of notifications'}
              <button aria-label='Close' onClick={this.handleClose}>
                <img
                  src={require('../assets/close-icon.png')}
                  alt='Close icon'
                />
              </button>
            </p>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <ul>
                {listNotifications.map((notification) => {
                  const props = {
                    type: notification.type,
                    ...(notification.value
                      ? { value: notification.value }
                      : { html: notification.html }),
                  };
                  return (
                    <NotificationItem
                      key={notification.id}
                      {...props}
                      id={notification.id}
                      markAsRead={this.markAsRead}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
