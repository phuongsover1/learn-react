/* eslint-disable react/prop-types */
import { Fragment, useEffect, useRef, useState } from 'react';
import { Prompt, useHistory } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = props => {
  const [isEntered, setIsEntered] = useState(false);
  const history = useHistory();
  const commentTextRef = useRef();
  const { sendRequest, error, status } = useHttp(
    addComment.bind(null, props.id)
  );
  const { onAddComment } = props;

  const onFocusFormHandler = () => {
    setIsEntered(true);
  };

  const onCLickBtnHandler = () => {
    setIsEntered(false);
  };

  const submitFormHandler = event => {
    event.preventDefault();

    const userComment = commentTextRef.current.value;
    // optional: Could validate here
    if (userComment.trim() === '') return;

    // send comment to server
    sendRequest(userComment);

    commentTextRef.current.value = '';
  };

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddComment();
    }
  }, [onAddComment, status, error]);

  return (
    <Fragment>
      <Prompt
        when={isEntered}
        message={location =>
          "You' ll lose any input that you have typed if you leave this page. Are you sure?"
        }
      />
      <form
        className={classes.form}
        onSubmit={submitFormHandler}
        onFocus={onFocusFormHandler}
      >
        {status === 'pending' && (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        )}

        {error && <div className='centered'>{error}</div>}

        <div className={classes.control} onSubmit={submitFormHandler}>
          <label htmlFor='comment'>Your Comment</label>
          <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={onCLickBtnHandler}>
            Add Comment
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default NewCommentForm;
