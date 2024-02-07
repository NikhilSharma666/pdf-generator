/**
 * WordPress dependencies.
 */
import React, { createContext, useContext, useState } from "react";

/**
 * Context Component.
 */
const SettingsContext = createContext();

export function useSettings() {
  return useContext(SettingsContext);
}

const SettingsProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    product: "",
    quantity: "",
    price: "",
  });
  return (
    <SettingsContext.Provider value={{ formData, setFormData }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
