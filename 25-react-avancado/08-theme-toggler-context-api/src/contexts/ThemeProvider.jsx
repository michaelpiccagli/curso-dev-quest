import { useState } from "react"
import { ThemeContext } from "./ThemeContext"
import { themes } from "./ThemeValues"

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
