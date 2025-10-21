'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface FormData {
  [key: string]: any;
}

interface UseFormPersistenceOptions {
  storageKey: string;
  debounceMs?: number;
  excludeFields?: string[];
}

export function useFormPersistence<T extends FormData>(
  initialData: T,
  options: UseFormPersistenceOptions
) {
  const { storageKey, debounceMs = 500, excludeFields = [] } = options;
  
  const [isOnline, setIsOnline] = useState(true);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsedData = JSON.parse(saved);
        return parsedData;
      }
    } catch (error) {
      console.warn('Failed to load form data from localStorage:', error);
    }
    return initialData;
  }, [storageKey, initialData]);

  // Save data to localStorage with debouncing
  const saveToStorage = useCallback(
    (data: T) => {
      try {
        // Filter out excluded fields
        const filteredData = { ...data };
        excludeFields.forEach(field => {
          delete filteredData[field];
        });

        localStorage.setItem(storageKey, JSON.stringify(filteredData));
        setHasUnsavedChanges(false);
      } catch (error) {
        console.warn('Failed to save form data to localStorage:', error);
      }
    },
    [storageKey, excludeFields]
  );

  // Debounced save function
  const debouncedSave = useCallback(
    (data: T) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        saveToStorage(data);
        timeoutRef.current = null;
      }, debounceMs);
    },
    [saveToStorage, debounceMs]
  );

  // Online/offline detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Set initial state
    setIsOnline(navigator.onLine);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Clear saved data
  const clearSavedData = useCallback(() => {
    try {
      localStorage.removeItem(storageKey);
      setHasUnsavedChanges(false);
    } catch (error) {
      console.warn('Failed to clear form data from localStorage:', error);
    }
  }, [storageKey]);

  // Update form data and save
  const updateFormData = useCallback(
    (newData: T) => {
      setHasUnsavedChanges(true);
      debouncedSave(newData);
    },
    [debouncedSave]
  );

  return {
    isOnline,
    hasUnsavedChanges,
    updateFormData,
    clearSavedData,
    saveToStorage,
  };
}