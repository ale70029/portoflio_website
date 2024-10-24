import React, { createContext, useState } from 'react';

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('it');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export default LangContext;