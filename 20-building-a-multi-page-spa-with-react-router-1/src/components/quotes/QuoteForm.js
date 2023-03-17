/* eslint-disable react/prop-types */
import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = props => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const [isEntered, setIsEntered] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const onFocusFormHandler = () => {
    console.log('Focus!');
    setIsEntered(true);
  };

  const finishEnteredForm = () => {
    setIsEntered(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntered}
        message={location =>
          "Are you sure to leave the page? All values you've enterd will be lost "
        }
      />
      <Card>
        <form
          onFocus={onFocusFormHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn' onClick={finishEnteredForm}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
