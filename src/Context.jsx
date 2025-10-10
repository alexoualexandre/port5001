import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const Context = createContext();

export function Provider({ children }){
    const [txt,setTxt] = useState("le texte blabla");

  return (
    <Context.Provider
      value={{
        txt,
        setTxt,
      }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
};
export const MyContext = () => useContext(Context);
