import React, { Component } from 'react';
import styles from './styles.module.scss';

import AuthContainer from './containers/auth/authContainer.js';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <AuthContainer />
        </div>
      </div>
    );
  }
}

export default App;
