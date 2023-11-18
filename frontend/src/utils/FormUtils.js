import { useState } from 'react';

export const useHandleChange = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (field, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };
  
    return [formData, handleChange];
};
