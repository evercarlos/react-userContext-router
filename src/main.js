
import React, { useState } from 'react';
import { ThemeContext } from './components/themeContext';
import { Module } from './module';


export const Main = () => {

    const [state, setState] = useState({});

    return (
        <ThemeContext.Provider value={{state, setState}}>
          <Module />
        </ThemeContext.Provider>
    )
}