import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

const CommentsList = props => {
  return (
    <ul className={classes.comments}>
      {props.comments.map(comment => (
        <CommentItem key={comment.id} data={comment.data} />
      ))}
    </ul>
  );
};

export default CommentsList;
