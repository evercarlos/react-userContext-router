import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";


export const Us = () => {

  const themeContext = useContext(ThemeContext)
  console.log(themeContext);
  
    return (
        <>
          <h4>Nosotros</h4>
        </>
    )
}