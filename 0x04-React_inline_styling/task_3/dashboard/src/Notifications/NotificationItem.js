import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem(props) {
  const { id, markAsRead, type, value, html } = props;
  const handleClick = () => markAsRead(id);
  const colorStyle = type === 'default' ? styles.Default : styles.Urgent;

  return value ? (
    <li
      className={css(colorStyle, styles.ListStyle)}
      data-notification-type={type}
      onClick={handleClick}
    >
      {value}
    </li>
  ) : (
    <li
      className={css(colorStyle, styles.ListStyle)}
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

  ListStyle: {
    '@media only screen and (max-width: 900px)': {
      borderBottom: '1px solid #000',
      fontSize: '20px',
      padding: '10px 8px',
    },
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
