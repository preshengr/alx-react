import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader
    ? css(styles.HeaderRows, styles.Tr)
    : css(styles.DefaultRows, styles.Tr);

  return (
    <tr className={rowStyle}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(styles.Th)}>{textFirstCell}</th>
            <th className={css(styles.Th)}>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan={2}>{textFirstCell}</th>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  DefaultRows: {
    backgroundColor: '#f5f5f5ab',
  },

  HeaderRows: {
    backgroundColor: '#deb5b545',
  },

  Tr: {
    border: 'solid 1px #ccc',
  },

  Th: {
    textAlign: 'left',
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
