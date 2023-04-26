import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const isWindowUndefined = typeof window === 'undefined';
  if (initialValue) {
    const item = window.localStorage.getItem(key);
    if (!item && !isWindowUndefined) {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }
  const [storedValue, setStoredValue] = useState(() => {
    if (isWindowUndefined) {
      return initialValue;
    }
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse stored json or if none return initialValue
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    if (!isWindowUndefined) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
