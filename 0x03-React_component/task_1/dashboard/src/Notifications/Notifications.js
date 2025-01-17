import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';
import './Notifications.css';

export default function Notifications({ displayDrawer, listNotifications }) {
  function handleClose() {
    console.log('Close button has been clicked');
  }

  return (
    <>
      <div className='menuItem'>Your notifications</div>
      {displayDrawer && (
        <div className='Notifications'>
          <p>
            {listNotifications.length > 0 &&
              'Here is the list of notifications'}
            <button aria-label='Close' onClick={handleClose}>
              <img src={require('../assets/close-icon.png')} alt='Close icon' />
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
                return <NotificationItem key={notification.id} {...props} />;
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
