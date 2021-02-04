import React from 'react';

const Form = ({ input, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" value={input} onChange={handleChange} autoComplete="off" />
      <input type="submit" value="add" />
    </form>
  );
};

export default Form;
