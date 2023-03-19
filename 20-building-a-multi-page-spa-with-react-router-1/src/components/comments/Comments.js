/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from '../comments/CommentsList';

const Comments = props => {
  const {
    sendRequest,
    status,
    error,
    data: loadedComments,
  } = useHttp(getAllComments);
  const [isAddingComment, setIsAddingComment] = useState(false);
  let commentContent = '';

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const id = props.id;

  const onAddCommentHandler = useCallback(() => {
    sendRequest(id);
  }, [id, sendRequest]);
  useEffect(() => {
    sendRequest(props.id);
  }, [props.id, sendRequest]);

  if (status === 'pending') {
    commentContent = <LoadingSpinner />;
  }

  if (error) {
    return <div className='centered focused'>{error}</div>;
  }

  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    commentContent = (
      <div className='centered'>
        <p>This quote doesn&apos;t have any comment. Please add some.</p>
      </div>
    );
  } else if (loadedComments && loadedComments.length > 0) {
    commentContent = <CommentsList comments={loadedComments} />;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm id={props.id} onAddComment={onAddCommentHandler} />
      )}
      {commentContent}
    </section>
  );
};

export default Comments;
