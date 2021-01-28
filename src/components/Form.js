import React from 'react';
import { useForm } from '../hooks';

const Form = () => {
  const { input, handleChange, handleBlur, handleSubmit } = useForm('http://localhost:1234/todos');

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" value={input} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
      <input type="submit" value="add" />
    </form>
  );
};

export default Form;
