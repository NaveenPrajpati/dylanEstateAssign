import { createContext, useState } from "react";

export const MyContext = createContext();
export default function Context({ children }) {
  const [showModal, setShowModal] = useState(false);
  const value = {
    showModal,
    setShowModal,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
