import React, { useCallback, useContext, useState } from 'react';
import Store from '../../contexts';
import styles from './form.module.css';

const Form = () => {
  const context = useContext(Store);
  const [text, setText] = useState('');

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      context.addItem(text);
      context.toggleForm();

      setText('');
    },
    [context, text]
  );
  const onClickCancel = useCallback(() => {
    context.toggleForm();
  }, [context]);

  return (
    <div className={`${context.hidden ? styles.hiddenContainer : styles.container}`}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input type="text" className={styles.input} placeholder="텍스트 입력" value={text} onChange={onChange} />
        <div className={styles.buttonContainer}>
          <button className={styles.submitButton} type="submit" onClick={onSubmit}>
            입력
          </button>
          <button className={styles.cancelButton} type="button" onClick={onClickCancel}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
