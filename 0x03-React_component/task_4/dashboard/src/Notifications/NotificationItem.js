import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };
  render() {
    const { type, html, value } = this.props;
    return value ? (
      <li data-notification-type={type} onClick={this.handleClick}>
        {value}
      </li>
    ) : (
      <li
        data-notification-type={type}
        onClick={this.handleClick}
        dangerouslySetInnerHTML={html}
      ></li>
    );
  }
}

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
