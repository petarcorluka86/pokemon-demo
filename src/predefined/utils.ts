/**
 * Safely reads a value from localStorage with type safety
 * @param key Storage key to read from
 * @param defaultValue Default value to return if key doesn't exist
 * @returns The stored value or defaultValue if not found
 */
export function readFromStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return defaultValue;
    }
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`Error reading from localStorage key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Safely writes a value to localStorage
 * @param key Storage key to write to
 * @param value Value to store
 * @returns true if successful, false otherwise
 */
export function writeToStorage<T>(key: string, value: T): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error writing to localStorage key "${key}":`, error);
    return false;
  }
}

/**
 * Blocks the thread for the given number of milliseconds
 * @param ms Number of milliseconds to block the thread
 * @returns A promise that resolves to true
 */
export function blockThread(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
}
