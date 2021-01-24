import React, { useState } from 'react';

const Form = () => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
    console.log(input);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //todos에 추가
    setInput('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="todo" value={input} onChange={onChange} autoComplete="off" />
      <input type="submit" value="add" />
    </form>
  );
};

export default Form;
