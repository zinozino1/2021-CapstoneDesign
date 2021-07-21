import { useState } from "react";

/**
 * @author 박진호
 * @version 1.0
 * @summary 입력폼 커스텀 훅
 */

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return [value, setValue, handleInput];
};

export default useInput;
