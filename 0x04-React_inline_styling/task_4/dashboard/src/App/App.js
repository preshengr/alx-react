import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import { getLatestNotification } from '../utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    const { logOut } = this.props;

    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 101, type: 'default', value: 'New course available' },
      { id: 102, type: 'urgent', value: 'New resume available' },
      { id: 103, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.body)}>
          <Header />
          <div className='App-body'>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title='News from the School'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                gravida augue id mi commodo, vel fringilla quam fermentum. Fusce
                euismod luctus leo, a ultricies elit hendrerit non. Integer nec
                nulla nec urna fermentum feugiat eu eu tellus. Integer rhoncus
                orci non finibus sodales. In ut augue a libero ullamcorper
                bibendum vel nec nulla. Nullam bibendum nulla nec risus
                malesuada, vel ullamcorper nulla iaculis. Integer hendrerit
                massa ac urna vehicula, id rhoncus purus bibendum. Integer nec
                fermentum mi.
              </p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'column',
  },

  footer: {
    borderTop: '3px solid #E0354B',
    width: '98%',
    textAlign: 'center',
  },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
