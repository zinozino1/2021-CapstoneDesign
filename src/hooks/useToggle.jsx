import React, { useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const handleToggle = () => {
    setValue(!value);
  };

  return [value, setValue, handleToggle];
};

export default useToggle;
