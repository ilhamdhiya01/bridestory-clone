import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] => {
  const getInitialValue = (): T => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        try {
          return JSON.parse(storedValue);
        } catch (error) {
          console.error(`Error parsing localStorage item "${key}":`, error);
        }
      }
    }
    return initialValue;
  };

  const [value, setValue] = useState<T>(getInitialValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
