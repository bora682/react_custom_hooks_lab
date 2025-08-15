import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : initialValue;
  });

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(key, value); // store raw string
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;