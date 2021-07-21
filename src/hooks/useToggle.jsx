import { useState } from "react";

/**
 * @author 박진호
 * @version 1.0
 * @summary 토글 커스텀 훅
 */

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const handleToggle = () => {
    setValue(!value);
  };

  return [value, setValue, handleToggle];
};

export default useToggle;
