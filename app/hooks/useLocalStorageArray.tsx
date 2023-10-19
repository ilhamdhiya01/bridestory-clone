'use client';

import CryptoJS from 'crypto-js';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useLocalStorageArray = <T,>(key: string, initialValue: T[] = []): [T[], Dispatch<SetStateAction<T[]>>] => {
  const encryptData = (data: string, key: string) => {
    const encrypt = CryptoJS.AES.encrypt(key, data).toString();
    return encrypt;
  };

  const decryptData = (data: string, key: string) => {
    const bytes = CryptoJS.AES.decrypt(data, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  };
  // Membaca nilai awal dari localStorage saat komponen diinisialisasi
  const getInitialValue = (): T[] => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null && storedValue !== undefined) {
        try {
          // return JSON.parse(decryptData(storedValue, key)) as T[];
          return JSON.parse(storedValue) as T[];
        } catch (error) {
          // console.error(`Error parsing localStorage item "${key}":`, error);
        }
      }
    }
    return initialValue;
  };

  const [storedValue, setStoredValue] = useState<T[]>(getInitialValue);

  // Update nilai di localStorage saat nilai berubah
  useEffect(() => {
    // localStorage.setItem(key, encryptData(JSON.stringify(storedValue), key));
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorageArray;
