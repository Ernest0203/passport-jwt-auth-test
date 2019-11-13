import React, { useState } from 'react';
import styles from './styles.module.scss';

const AuthComponent = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const setValue = set => e => {
    set(e.target.value);
  }

  const loginUser = () => {
    const data = { login, password };
    props.loginUserAction(data);
  }

  const registerUser = () => {
    const data = { login, password };
    props.registerUserAction(data);
  }
  
  const error = props.error ? <div className={styles.notifError}>{props.error}</div> : '';
  const confirm = props.confirm ? <div className={styles.notifConfirm}>{props.confirm}</div> : '';
  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h3 className={styles.title}>Login or Register</h3>
        <div className={styles.form}> 
          <input className={styles.input} value={login} onChange={setValue(setLogin)} name="login" type="text" placeholder="Login" required/>
          <input className={styles.input} value={password} onChange={setValue(setPassword)} name="password" type="password" placeholder="Password" />
          <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={() => loginUser()}>Login</button>
            <button className={styles.btn} onClick={() => registerUser()}>Register</button>
          </div>
          {error || confirm}
        </div>
      </div>
    </div>
  )
}

export default AuthComponent;