import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [storedValue, setValue] = useLocalStorage("key", "");
  return <div />;
};

export default useDarkMode;
