import React, { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return [value, setValue, handleInput];
};

export default useInput;
