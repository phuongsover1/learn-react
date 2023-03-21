import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const ctxObj = useContext(AuthContext);
  const history = useHistory();
  const passwordInputRef = useRef();

  const onSubmitHandler = async event => {
    event.preventDefault();
    const enteredPassword = passwordInputRef.current.value;

    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBAbyrBpWMgYLvElN3PvukZVjTzJFWkTcY',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: ctxObj.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok) {
      alert('Changed password successfully !!!');
      history.replace('/');
    } else {
      const responseObj = await response.json();
      if (responseObj && responseObj.error?.message)
        alert(`Error: ${responseObj.error.message}`);
    }
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
