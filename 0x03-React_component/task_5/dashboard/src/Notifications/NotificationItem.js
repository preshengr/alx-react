import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  const { id, markAsRead, type, value, html } = props;
  const handleClick = () => markAsRead(id);

  return value ? (
    <li data-notification-type={type} onClick={handleClick}>
      {value}
    </li>
  ) : (
    <li
      data-notification-type={type}
      onClick={handleClick}
      dangerouslySetInnerHTML={html}
    ></li>
  );
}

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
