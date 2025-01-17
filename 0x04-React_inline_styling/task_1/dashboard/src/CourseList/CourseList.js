import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';

function CourseList({ listCourses }) {
  return (
    <table id='CourseList' className={css(tableStyles.table)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          ))
        ) : (
          <tr>
            <td style={{ textAlign: 'center' }} colSpan={2}>
              No course available yet
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

const tableStyles = StyleSheet.create({
  table: {
    display: 'table',
    border: '1px solid',
    borderCollapse: 'collapse',
    margin: '2rem auto 0 auto',
    width: '90%',
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
