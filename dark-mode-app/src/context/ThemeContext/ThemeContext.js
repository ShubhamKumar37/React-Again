import React, {createContext, useContext} from "react"

export const ThemeContext = React.createContext({
    contextName: "dark",
    lightTheme: () => {},
    darkTheme: () => {}
});

export const themeProvider = ThemeContext.Provider;

export default function useTheme() 
{
    return useContext(ThemeContext);
}