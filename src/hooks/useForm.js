import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const useForm = ({ url }) => {
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const postData = async () => {
    try {
      await axios({
        url,
        method: 'POST',
        data: {
          status: 'todo',
          contents: input,
          createdAt: Date.now(),
        },
      });
      // console.log('✅', res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleBlur = (e) => {
    console.log('blur⭐️⭐️');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    setInput('');
  };

  return {
    input,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useForm;
