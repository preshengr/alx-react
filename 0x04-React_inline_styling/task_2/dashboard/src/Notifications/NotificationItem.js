import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem(props) {
  const { id, markAsRead, type, value, html } = props;
  const handleClick = () => markAsRead(id);
  const listStyle =
    type === 'default' ? css(styles.Default) : css(styles.Urgent);

  return value ? (
    <li
      className={listStyle}
      data-notification-type={type}
      onClick={handleClick}
    >
      {value}
    </li>
  ) : (
    <li
      className={listStyle}
      data-notification-type={type}
      onClick={handleClick}
      dangerouslySetInnerHTML={html}
    ></li>
  );
}

const styles = StyleSheet.create({
  Default: {
    color: 'blue',
  },

  Urgent: {
    color: 'red',
  },
});

NotificationItem.defaulProps = {
  type: 'default',
  value: '',
  html: {},
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
};

export default NotificationItem;
