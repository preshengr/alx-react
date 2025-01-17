import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';

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
        <div className={`${css(styles.MenuItem)} menuItem`}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={`${css(styles.Notifications)} Notifications`}>
            <p className={css(styles.Paragraph)}>
              {listNotifications.length > 0 &&
                'Here is the list of notifications'}
              <button
                className={css(styles.Button)}
                aria-label='Close'
                onClick={this.handleClose}
              >
                <img
                  className={css(styles.CloseImg)}
                  src={require('../assets/close-icon.png')}
                  alt='Close icon'
                />
              </button>
            </p>
            {listNotifications.length === 0 ? (
              <p className={css(styles.Paragraph)}>
                No new notification for now
              </p>
            ) : (
              <ul className={css(styles.List)}>
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

const styles = StyleSheet.create({
  Notifications: {
    border: '1px dashed #E0354B',
    padding: '5px',
    margin: '5px auto 0',
    position: 'absolute',
    right: '1em',
  },

  MenuItem: {
    textAlign: 'end',
    marginTop: '1em',
    marginRight: '1em',
  },

  Button: {
    backgroundColor: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
  },

  CloseImg: {
    width: '8px',
  },

  Paragraph: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '0.5em',
  },

  List: {
    margin: '0.5em',
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
